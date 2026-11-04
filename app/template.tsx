"use client";

import { useEffect, useState, ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<"initial" | "animating" | "settled">("initial");

  useEffect(() => {
    // Start entrance animation
    const animTimer = setTimeout(() => {
      setStage("animating");
    }, 10);

    // After animation completes, clear transform so fixed modals remain window-bound
    const settleTimer = setTimeout(() => {
      setStage("settled");
    }, 520);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(settleTimer);
    };
  }, []);

  return (
    <div
      style={{
        opacity: stage === "initial" ? 0 : 1,
        transform:
          stage === "initial"
            ? "translateY(12px)"
            : stage === "animating"
            ? "translateY(0)"
            : "none",
        transition:
          stage !== "settled"
            ? "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
            : "none",
      }}
    >
      {children}
    </div>
  );
}
