"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Italic,
  Underline,
  TextAlignStart,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  Strikethrough,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTypography } from "@/hooks/use-typography";
import { Toggle } from "../ui/toggle";
import { Label } from "../ui/label";
import {
  COLORS,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
} from "@/lib/editor/utils";
interface TypographyEditControllerProps {
  activeElement: HTMLElement | null;
}

export function PropertiesEditController({
  activeElement,
}: TypographyEditControllerProps) {
  const {
    setTextAlign,
    setFontWeight,
    setFontSize,
    setFontColor,
    currentWeight,
    currentAlign,
    currentFontSize,
    currentFontColor,
    currentTextDecoration,
    updateTypography,
  } = useTypography();

  return (
    // const {typographySettings, setTypographySettings} = useTypographySettings();
    <div className="flex items-center gap-2">
      <Label>Font size</Label>
      <Select value={currentFontSize} onValueChange={(v) => setFontSize(v)}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Font Size" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Font Size</SelectLabel>

            {FONT_SIZE_OPTIONS.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Label>Font weight</Label>
      <Select
        value={currentWeight ?? undefined}
        onValueChange={(v) => setFontWeight(v)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Font Weight" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Font Weight</SelectLabel>
            {FONT_WEIGHT_OPTIONS.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Toggle
        aria-label="Toggle italic"
        size="sm"
        variant="outline"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
        pressed={activeElement?.classList.contains("italic") || false}
        onPressedChange={(pressed) =>
          updateTypography("fontStyle", pressed ? "italic" : "not-italic")
        }
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <ToggleGroup
        type="single"
        variant="outline"
        value={currentTextDecoration || undefined}
        onValueChange={(value) => updateTypography("textDecoration", value)}
      >
        <ToggleGroupItem value="line-through" aria-label="Toggle line through">
          <Strikethrough className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle strikethrough">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="overline" aria-label="Toggle italic">
          <Underline className="h-4 w-4 rotate-180" />
        </ToggleGroupItem>
      </ToggleGroup>
      {/*  Text align */}
      <ToggleGroup
        type="single"
        variant="outline"
        value={currentAlign || undefined}
        onValueChange={(value) => setTextAlign(value)}
      >
        <ToggleGroupItem value="text-left" aria-label="Align left">
          <TextAlignStart className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="text-center" aria-label="Align center">
          <TextAlignCenter className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="text-right" aria-label="Align right">
          <TextAlignEnd className="h-4 w-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="text-justify" aria-label="Align justify">
          <TextAlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <Label>Font color</Label>
      <Select
        value={currentFontColor ?? undefined}
        onValueChange={(v) => setFontColor(v)}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {COLORS.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                {color.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
