"use client";

import { ElementType, getElementType } from "@/lib/editor/elements";
import React, { createContext, useContext, useEffect, useState } from "react";
import { lockedType } from "../types";

interface EditorContextType {
  editableMode: boolean;
  activeElement: HTMLElement | null;
  elementType: ElementType;
  lockedBoundingClients: lockedType | null;
  toggleEditableMode: () => void;
  setActiveElement: (element: HTMLElement | null) => void;
  updateBoundingClients: () => void;
}

const EditorContext = createContext<EditorContextType | null>(null);

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [editableMode, setEditableMode] = useState(true);

  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const [elementType, setElementType] = useState<ElementType>("unknown");
  const [lockedBoundingClients, setLockedBoundingClients] =
    useState<lockedType | null>(null);

  const resetProvider = () => {
    setActiveElement(null);
    setElementType("unknown");
    setLockedBoundingClients(null);
  };

  const toggleEditableMode = () => {
    setEditableMode((prev) => !prev);
    resetProvider();
  };
  // Update bounding clients of the active element
  const updateBoundingClients = () => {
    if (activeElement) {
      const rect = structuredClone(activeElement.getBoundingClientRect());
      setLockedBoundingClients({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
        tagName: activeElement.tagName.toLowerCase(),
      });
    }
  };

  useEffect(() => {
    // Update element type and bounding clients when active element changes
    const updateElTypeAndBoudingClients = () => {
      if (activeElement) {
        const type = getElementType(activeElement);
        setElementType(type);
      }
      updateBoundingClients();
    };
    updateElTypeAndBoudingClients();
  }, [activeElement]);

  return (
    <EditorContext.Provider
      value={{
        editableMode,
        activeElement,
        elementType,
        lockedBoundingClients,
        setActiveElement,
        toggleEditableMode,
        updateBoundingClients,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditor must be used inside <EditorProvider>");
  return ctx;
}
