import { useEffect, useState } from "react";
import { lockedType } from "../types";
import { useElementTracker } from "@/hooks/use-element-tracker";

export function ElementOverlay({
  editableMode,
  setActiveElement,
  userAppAreaRef,
}: {
  editableMode: boolean;
  setActiveElement: (el: HTMLElement | null) => void;
  userAppAreaRef?: React.RefObject<HTMLDivElement> | null;
}) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const { liveSelected, locked } = useElementTracker(
    userAppAreaRef,
    editableMode,
    setActiveElement
  );
  useEffect(() => {
    if (!liveSelected) return;
    const update = () => setRect(liveSelected.getBoundingClientRect());
    update();

    // Update overlay position on resize or scroll
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [liveSelected]);

  //   const rect = liveSelected?.getBoundingClientRect();

  if (!rect) return null;

  const lockedOverlay = locked ? (
    <div
      data-dev-overlay
      className="fixed border border-sky-400 pointer-events-none select-none"
      style={{
        top: locked.top - window.scrollY,
        left: locked.left - window.scrollX,
        width: locked.width,
        height: locked.height,
        zIndex: 9999,
      }}
    >
      <span className="absolute -top-5 left-0 bg-sky-100 text-sky-600 px-1 rounded text-xs">
        {locked.tagName}
      </span>
    </div>
  ) : null;
  const liveOverlay = liveSelected ? (
    <div
      className="fixed border-2 border-sky-400 pointer-events-none select-none z-9998"
      style={{
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 9999,
      }}
    >
      <span className="absolute -top-5 left-0 bg-sky-100 text-sky-600 px-1 rounded text-xs">
        {liveSelected?.tagName.toLowerCase()}
      </span>
    </div>
  ) : null;
  return (
    <>
      {lockedOverlay}
      {liveOverlay}
    </>
  );
}
