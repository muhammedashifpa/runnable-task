"use client";
import { useEffect } from "react";
import { ElementOverlay } from "./element-overlay";
import { useEditor } from "./editor-provider";

// EditorPreview wraps the user application area
// and conditionally renders the ElementOverlay in editable mode
// and Place Selected element overlay
export default function EditorPreview({
  component,
}: {
  component: React.ReactNode;
}) {
  const {
    editableMode,
    setActiveElement,
    lockedBoundingClients,
    userAppAreaRef,
  } = useEditor();
  return (
    <>
      <div className="[&_*]:cursor-crosshair" ref={userAppAreaRef}>
        {component}
      </div>
      {editableMode && (
        <ElementOverlay
          setActiveElement={setActiveElement}
          userAppAreaRef={userAppAreaRef}
          editableMode={editableMode}
          lockedBoundingClients={lockedBoundingClients}
        />
      )}
    </>
  );
}
