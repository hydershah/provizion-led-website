const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/mailer');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters')
    .escape(),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\d\s\-\(\)\+]+$/)
    .withMessage('Invalid phone number format'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 2000 })
    .withMessage('Message cannot exceed 2000 characters')
    .escape(),
  body('source')
    .optional()
    .isIn(['contact-page', 'quick-quote', 'footer']),
];

// @route   POST /api/contact
// @desc    Submit a contact/quote request
// @access  Public
router.post('/', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    const { fullName, email, phone, message, source } = req.body;

    // Save to database
    const contact = await Contact.create({
      fullName,
      email,
      phone,
      message,
      source: source || 'contact-page',
    });

    // Send email notification (non-blocking)
    sendContactEmail({ fullName, email, phone, message }).catch((err) =>
      console.error('Email send error:', err.message)
    );

    res.status(201).json({
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.',
      data: { id: contact._id },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please call us at (984) 217-6527.',
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions (admin)
// @access  Private (add auth middleware in production)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const query = status ? { status } : {};

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
