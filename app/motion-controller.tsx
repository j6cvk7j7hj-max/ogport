'use client';

import { useEffect } from 'react';

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    root.dataset.motion = 'ready';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
