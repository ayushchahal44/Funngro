"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number; // in seconds
  suffix?: string;
  prefix?: string;
}

export function Counter({ value, duration = 1.5, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = Math.round(totalMiliseconds / frameRate);
      let frame = 0;

      // Smooth deceleration easing function
      const easeOutQuad = (t: number) => t * (2 - t);

      const timer = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(Math.floor(end * progress));

        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, frameRate);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default Counter;
