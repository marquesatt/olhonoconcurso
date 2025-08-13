"use client";

import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

type RevealProps = {
  className?: string;
  children: ReactNode;
  threshold?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Reveal({ className = "", children, threshold = 0.15, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("reveal--in");
            io.disconnect();
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
