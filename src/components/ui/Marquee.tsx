import type { ReactNode } from "react";

export default function Marquee({
  children,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-12 whitespace-nowrap ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
