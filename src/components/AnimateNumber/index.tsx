"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';

const AnimatedNumberCounter = ({ value = 0, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  const startAnimation = useCallback(() => {
    const start = 0;
    const end = value;
    const startTime = new Date().getTime();

    const frame = () => {
      const currentTime = new Date().getTime();
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        const increment = Math.floor(end * progress);
        setCount(start + increment);
        window.requestAnimationFrame(frame);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(frame);
  }, [duration, value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <h5 ref={elementRef}>
      {Math.floor(count)}
    </h5>
  );
};

export default AnimatedNumberCounter;