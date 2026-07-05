'use client';

import { useState, useEffect } from 'react';

interface InstallData {
  installs: number;
  rating: number;
}

const FALLBACK: InstallData = { installs: 5734, rating: 5.0 };

export function useInstallCount(): InstallData {
  const [data, setData] = useState<InstallData>(FALLBACK);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/installs')
      .then((r) => r.json())
      .then((json: InstallData) => {
        if (!cancelled && json.installs > 0) {
          setData(json);
        }
      })
      .catch(() => {
        /* keep fallback */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}

export function formatInstalls(n: number): string {
  if (n >= 1000) {
    return n.toLocaleString('en-US');
  }
  return String(n);
}
