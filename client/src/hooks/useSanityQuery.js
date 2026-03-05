import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';

/**
 * Generic hook to fetch data from Sanity with fallback.
 *
 * @param {string} query - GROQ query
 * @param {object} [params] - Query parameters
 * @param {*} fallbackData - Data to use if Sanity fetch fails
 * @returns {{ data: *, loading: boolean, error: Error|null }}
 */
export default function useSanityQuery(query, params = {}, fallbackData = null) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch(query, params)
      .then((result) => {
        if (!cancelled && result) {
          setData(result);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.warn('Sanity fetch failed, using fallback data:', err.message);
          setError(err);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}
