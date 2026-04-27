import { useEffect, useRef } from "react";

/** Reveal-on-scroll wrapper. Adds `.in` class when the element enters viewport. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as any;
  return <Component ref={ref} className={`reveal ${className}`}>{children}</Component>;
}
