'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  target: number;
  decimals?: number;
  suffix?: string;
  /** Static fallback shown before the counter runs (and during SSR). */
  fallback: string;
  className?: string;
};

/**
 * Counts up to `target` when scrolled into view. Falls back to a
 * formatted string for SSR and before the IntersectionObserver fires.
 */
export function Counter({
  target,
  decimals = 0,
  suffix = '',
  fallback,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cio.unobserve(entry.target);
          const t0 = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const v = target * (1 - Math.pow(1 - p, 4));
            setDisplay(
              (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-US')) +
                suffix
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    cio.observe(el);
    return () => cio.disconnect();
  }, [target, decimals, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
