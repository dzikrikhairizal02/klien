"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop - Right side vertical bar */}
      <div className="hidden md:block fixed right-0 top-0 h-full w-[1px] z-40 bg-gray-100">
        <div
          className="bg-black/20 transition-all duration-200"
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Mobile - Bottom horizontal bar */}
      <div className="md:hidden fixed bottom-0 left-0 h-[1px] w-full z-40 bg-gray-100">
        <div
          className="bg-black/20 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
