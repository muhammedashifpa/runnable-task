export type ElementType =
  | "text"
  | "image"
  | "container"
  | "button"
  | "link"
  | "input"
  | "video"
  | "list"
  | "unknown";
export function getElementType(el: HTMLElement): ElementType {
  const tag = el.tagName.toLowerCase();

  // TEXT & HEADINGS
  if (
    [
      "p",
      "span",
      "label",
      "strong",
      "em",
      "small",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "a",
      "dt",
      "dd",
    ].includes(tag)
  )
    return "text";

  // IMAGE & MEDIA
  if (tag === "img") return "image";
  if (tag === "video") return "video";

  // CONTAINER / LAYOUT ELEMENTS
  if (
    ["div", "section", "header", "footer", "article", "main", "aside"].includes(
      tag
    )
  )
    return "container";

  // BUTTONS & LINKS
  if (tag === "button") return "button";
  if (tag === "a") return "link";

  // FORMS
  if (["input", "textarea", "select"].includes(tag)) return "input";

  // LISTS
  if (["ul", "ol", "li"].includes(tag)) return "list";

  return "unknown";
}

export const TYPO_CLASSES = {
  fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
  fontWeight:
    /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
  tracking: /^tracking-(tighter|tight|normal|wide|wider|widest)$/,
  leading: /^leading-(none|tight|snug|normal|relaxed|loose|\d+)$/,
  textAlign: /^text-(left|center|right|justify)$/,
  textDecoration: /^(underline|line-through|overline|no-underline)$/,
  fontStyle: /^(italic|not-italic)$/,
  color:
    /^text-(?:[a-z]+(?:-[a-z]+)?-\d{1,3}|black|white|transparent|current)(?:\/\d{1,3})?$/,
};

export const FONT_WEIGHT_OPTIONS: { label: string; value: string }[] = [
  { label: "Thin", value: "font-thin" },
  { label: "Extra Light", value: "font-extralight" },
  { label: "Light", value: "font-light" },
  { label: "Normal", value: "font-normal" },
  { label: "Medium", value: "font-medium" },
  { label: "Semi Bold", value: "font-semibold" },
  { label: "Bold", value: "font-bold" },
  { label: "Extra Bold", value: "font-extrabold" },
  { label: "Black", value: "font-black" },
];

export const FONT_SIZE_OPTIONS: { label: string; value: string }[] = [
  { label: "Xs", value: "text-xs" },
  { label: "Sm", value: "text-sm" },
  { label: "Base", value: "text-base" },
  { label: "Lg", value: "text-lg" },
  { label: "Xl", value: "text-xl" },
  { label: "2xl", value: "text-2xl" },
  { label: "3xl", value: "text-3xl" },
  { label: "4xl", value: "text-4xl" },
  { label: "5xl", value: "text-5xl" },
  { label: "6xl", value: "text-6xl" },
  { label: "7xl", value: "text-7xl" },
  { label: "8xl", value: "text-8xl" },
  { label: "9xl", value: "text-9xl" },
];

export const COLORS: { label: string; value: string }[] = [
  { label: "Default", value: "text-inherit" },
  { label: "Black", value: "text-black" },
  { label: "White", value: "text-white" },

  { label: "Slate", value: "text-slate-500" },
  { label: "Gray", value: "text-gray-500" },
  { label: "Gray 600", value: "text-gray-600" },
  { label: "Gray 700", value: "text-gray-700" },
  { label: "Gray 800", value: "text-gray-800" },
  { label: "Gray 900", value: "text-gray-900" },

  { label: "Zinc", value: "text-zinc-500" },
  { label: "Neutral", value: "text-neutral-500" },
  { label: "Stone", value: "text-stone-500" },

  { label: "Red", value: "text-red-500" },
  { label: "Orange", value: "text-orange-500" },
  { label: "Amber", value: "text-amber-500" },
  { label: "Yellow", value: "text-yellow-500" },

  { label: "Lime", value: "text-lime-500" },
  { label: "Green", value: "text-green-500" },
  { label: "Emerald", value: "text-emerald-500" },

  { label: "Teal", value: "text-teal-500" },
  { label: "Cyan", value: "text-cyan-500" },
  { label: "Sky", value: "text-sky-500" },

  { label: "Blue", value: "text-blue-500" },
  { label: "Indigo", value: "text-indigo-500" },
  { label: "Violet", value: "text-violet-500" },
  { label: "Purple", value: "text-purple-500" },
  { label: "Fuchsia", value: "text-fuchsia-500" },
  { label: "Pink", value: "text-pink-500" },
  { label: "Rose", value: "text-rose-500" },
];
