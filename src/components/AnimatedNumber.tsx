'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startValue = 0;
          const endValue = value;

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startValue + (endValue - startValue) * easeOutProgress);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
