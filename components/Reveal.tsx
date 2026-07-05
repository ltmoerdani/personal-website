'use client';

import { useEffect, useRef, useState, ReactNode, ElementType } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplied by 110ms for the delay. */
  index?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

/**
 * Wraps children in an element that fades up when scrolled into view.
 * Mirrors the IntersectionObserver effect from the original v3 site.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = 'div',
  className,
  style,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      data-reveal=""
      data-reveal-index={index}
      className={`${visible ? 'is-visible' : ''} ${className ?? ''}`}
      style={{ ...style, ['--reveal-index' as string]: index } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
