import { useEffect, useState } from "react";
import { useElementTracker } from "@/hooks/use-element-tracker";
import { lockedType } from "../types";

// ElementOverlay renders overlays for the live selected element
// and the locked selected element in editable mode
export function ElementOverlay({
  editableMode,
  setActiveElement,
  userAppAreaRef,
  lockedBoundingClients,
}: {
  editableMode: boolean;
  setActiveElement: (el: HTMLElement | null) => void;
  userAppAreaRef: React.RefObject<HTMLDivElement | null>;
  lockedBoundingClients: lockedType | null;
}) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  const { liveSelected } = useElementTracker(
    userAppAreaRef,
    editableMode,
    setActiveElement
  );

  useEffect(() => {
    if (!liveSelected) return;
    const update = () => {
      requestAnimationFrame(() => {
        setRect(liveSelected.getBoundingClientRect());
      });
    };
    update();

    // Update overlay position on resize or scroll
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [liveSelected]);

  if (!rect) return null;

  const lockedOverlay = lockedBoundingClients ? (
    <div
      data-dev-overlay
      className="fixed border border-sky-400 pointer-events-none select-none z-2000"
      style={{
        top: lockedBoundingClients.top - window.scrollY,
        left: lockedBoundingClients.left - window.scrollX,
        width: lockedBoundingClients.width,
        height: lockedBoundingClients.height,
      }}
    >
      <span className="absolute -top-5 left-0 bg-sky-100 text-sky-600 px-1 rounded text-xs">
        {lockedBoundingClients.tagName}
      </span>
    </div>
  ) : null;
  const liveOverlay = liveSelected ? (
    <div
      className="fixed border-2 border-sky-400 pointer-events-none select-none z-2000"
      style={{
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
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
