const express = require('express');
const router = express.Router();

const CALLRAIL_API = 'https://api.callrail.com/v3';
const ACCOUNT_ID = process.env.CALLRAIL_ACCOUNT_ID;
const API_KEY = process.env.CALLRAIL_API_KEY;

const headers = {
  Authorization: `Token token=${API_KEY}`,
  'Content-Type': 'application/json',
};

// GET /api/callrail/calls - Fetch recent calls
router.get('/calls', async (req, res) => {
  try {
    const { start_date, end_date, per_page = 25 } = req.query;
    const params = new URLSearchParams({ per_page });
    if (start_date) params.append('start_date', start_date);
    if (end_date) params.append('end_date', end_date);

    const response = await fetch(
      `${CALLRAIL_API}/a/${ACCOUNT_ID}/calls.json?${params}`,
      { headers }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('CallRail API error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch call data' });
  }
});

// GET /api/callrail/summary - Call summary stats
router.get('/summary', async (req, res) => {
  try {
    const { start_date, end_date } = req.query;
    const params = new URLSearchParams({ fields: 'total_calls,answered,missed,first_time_callers' });
    if (start_date) params.append('start_date', start_date);
    if (end_date) params.append('end_date', end_date);

    const response = await fetch(
      `${CALLRAIL_API}/a/${ACCOUNT_ID}/calls/summary.json?${params}`,
      { headers }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('CallRail summary error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch call summary' });
  }
});

// POST /api/callrail/webhook - CallRail webhook receiver
router.post('/webhook', (req, res) => {
  const call = req.body;
  console.log('[CallRail Webhook]', {
    type: call.type,
    caller: call.caller_number,
    tracking: call.tracking_number,
    source: call.source,
    duration: call.duration,
    timestamp: call.start_time,
  });
  res.status(200).json({ received: true });
});

module.exports = router;
