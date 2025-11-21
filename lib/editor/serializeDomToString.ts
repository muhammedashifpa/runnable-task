// utils/serializeDomToJsx.ts
function escapeText(text: string) {
  // minimal escaping for JSX text nodes
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function serializeAttributes(el: HTMLElement) {
  const attrs: string[] = [];
  for (const attr of Array.from(el.attributes)) {
    const name = attr.name;
    const value = attr.value;

    // convert "class" to "className"
    if (name === "class") {
      if (value.trim() !== "")
        attrs.push(`className="${value.replace(/"/g, '\\"')}"`);
      continue;
    }

    // skip dataset used for mapping if you want, or keep it
    // e.g. keep data-uid so AST route can match later
    if (name.startsWith("data-")) {
      attrs.push(`${name}="${value.replace(/"/g, '\\"')}"`);
      continue;
    }

    // boolean attributes like disabled / checked
    if (value === "") {
      attrs.push(`${name}`);
      continue;
    }

    // general attribute
    attrs.push(`${name}="${value.replace(/"/g, '\\"')}"`);
  }
  return attrs.join(" ");
}

export function serializeElementToJsx(
  el: HTMLElement,
  indent = 2,
  level = 0
): string {
  const pad = " ".repeat(level * indent);
  const tag = el.tagName.toLowerCase();

  // Text-only leaf
  if (
    el.childNodes.length === 1 &&
    el.childNodes[0].nodeType === Node.TEXT_NODE
  ) {
    const text = escapeText(el.textContent || "");
    const attrs = serializeAttributes(el);
    const attrStr = attrs ? " " + attrs : "";
    return `${pad}<${tag}${attrStr}>${text}</${tag}>`;
  }

  // Otherwise serialize children recursively
  const attrs = serializeAttributes(el);
  const attrStr = attrs ? " " + attrs : "";

  const children: string[] = [];

  for (const child of Array.from(el.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const txt = (child.textContent || "").trim();
      if (txt) children.push(pad + " ".repeat(indent) + escapeText(txt));
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      children.push(
        serializeElementToJsx(child as HTMLElement, indent, level + 1)
      );
    }
    // ignore comment nodes
  }

  if (children.length === 0) {
    return `${pad}<${tag}${attrStr} />`;
  }

  const inner = children.join("\n");
  return `${pad}<${tag}${attrStr}>\n${inner}\n${pad}</${tag}>`;
}

// Usage: rootEl is the container of the component (userAppAreaRef.current)
export function serializeRootToString(rootEl: HTMLElement) {
  const body = serializeElementToJsx(rootEl, 2, 1); // indent level 1 for wrapping
  return body;
}
