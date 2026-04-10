import { useDocumentOperation } from 'sanity';

/**
 * Custom Studio document action: "Fix legacy data".
 *
 * Appears only when a blogPost document has any of the following known defects
 * introduced by the external publishing API:
 *   - `slug` stored as a plain string instead of a slug object
 *   - stray `language` field (legacy i18n scaffold)
 *   - stray `en` field (legacy i18n scaffold)
 *
 * Clicking the action patches the document in place using the editor's own
 * Studio session — no API token required.
 */
export function fixLegacyDataAction(props) {
  const { id, type, draft, published, onComplete } = props;
  const { patch } = useDocumentOperation(id, type);

  const doc = draft || published;
  if (!doc) return null;

  const slugIsString = typeof doc.slug === 'string' && doc.slug.length > 0;
  const hasLanguage = doc.language !== undefined;
  const hasEn = doc.en !== undefined;

  if (!slugIsString && !hasLanguage && !hasEn) return null;

  return {
    label: 'Fix legacy data',
    tone: 'caution',
    onHandle: () => {
      const operations = [];

      if (slugIsString) {
        operations.push({
          set: {
            slug: { _type: 'slug', current: doc.slug },
          },
        });
      }

      const fieldsToUnset = [];
      if (hasLanguage) fieldsToUnset.push('language');
      if (hasEn) fieldsToUnset.push('en');
      if (fieldsToUnset.length > 0) {
        operations.push({ unset: fieldsToUnset });
      }

      patch.execute(operations);
      onComplete();
    },
  };
}
