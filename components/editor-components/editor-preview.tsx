"use client";
import { useRef } from "react";
import { ElementOverlay } from "./element-overlay";
import { useEditor } from "./editor-provider";
// EditorPreview wraps the user application area
// and conditionally renders the ElementOverlay in editable mode
// Place Selected element overlay
export default function EditorPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const { editableMode, setActiveElement, lockedBoundingClients } = useEditor();
  const userAppAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={userAppAreaRef}>
      {children}
      {editableMode && (
        <ElementOverlay
          setActiveElement={setActiveElement}
          userAppAreaRef={userAppAreaRef}
          editableMode={editableMode}
          lockedBoundingClients={lockedBoundingClients}
        />
      )}
    </div>
  );
}
