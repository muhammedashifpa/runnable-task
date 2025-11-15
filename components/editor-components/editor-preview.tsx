"use client";
import { useRef } from "react";
import { ElementOverlay } from "./element-overlay";
import { useEditor } from "./editor-provider";
import { useElementTracker } from "@/hooks/use-element-tracker";
// import { useElementTracker } from "./useElementTracker";

export default function EditorPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const { editableMode, setActiveElement } = useEditor();
  const userAppAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={userAppAreaRef}>
      {children}

      {editableMode && (
        <ElementOverlay
          setActiveElement={setActiveElement}
          userAppAreaRef={userAppAreaRef}
          editableMode={editableMode}
        />
      )}
    </div>
  );
}
