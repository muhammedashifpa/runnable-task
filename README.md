<p align="center">
  <h1 align="center">⚡ Runnable Task — Visual Component Editor ⚡</h1>

  <p align="center">
    A real-time, inline UI editor built with Next.js, React 19, Tailwind, and shadcn/ui.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/TailwindCSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss" />
    <img src="https://img.shields.io/badge/shadcn-ui-000?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Babel-standalone-F9DC3E?style=for-the-badge&logo=babel" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/license/muhammedashifpa/runable-task?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/muhammedashifpa/runable-task?style=flat-square" />
    <img src="https://img.shields.io/github/languages/top/muhammedashifpa/runable-task?style=flat-square" />
  </p>
</p>
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

  <p align="center">
    A real-time, inline UI editor built with Next.js, React 19, Tailwind, and shadcn/ui.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/TailwindCSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss" />
    <img src="https://img.shields.io/badge/shadcn-ui-000?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Babel-standalone-F9DC3E?style=for-the-badge&logo=babel" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/license/muhammedashifpa/runable-task?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/muhammedashifpa/runable-task?style=flat-square" />
    <img src="https://img.shields.io/github/languages/top/muhammedashifpa/runable-task?style=flat-square" />
  </p>
</p>
Here is a clean, professional README.md for your project Runnable Task – Visual Component Editor based on everything you’ve built so far (component loading, JSX serialization, live editing, saving, resetting, toolbar, error handling, etc.).

You can copy-paste directly into README.md.

⸻

🚀 Runnable Task — Visual Component Editor

A Next.js–powered visual component editor that lets users click, edit, and save UI components in real time.
The editor converts DOM → JSX, compiles JSX back into React components, and syncs updates to the backend.

Perfect for quick UI prototyping, inline content editing, and component-level customization.

⸻

🎯 Features

✨ 1. Live Component Editing
• Double-click any text element to edit inline
• Click any element to inspect and style
• Automatic detection of element type
• Sandbox-style editing mode with real-time updates

✨ 2. Smart Serialization
• Takes live HTML DOM
• Serializes into clean JSX
• Compiles JSX back into a React component (safe + validated)
• Maintains classNames, text nodes, and structure

✨ 3. Toolbar Controls

Use the built-in toolbar to style your text:
• Font size
• Font weight
• Italic
• Text decoration
• Alignment
• Color

Everything updates immediately in the preview.

✨ 4. Component Lifecycle Actions

💾 Save Component
• Serializes the edited UI
• Sends PUT request to /api/component/[id]
• Shows loading, success toast, and error toast
• Tracks dirty state and disables Save unless changed

🔄 Reset to Original
• Restores the original version using /api/component/reset/[id]
• Recompiles JSX and refreshes editor state
• Use this to “undo everything”

👁 Preview Mode
• Disables editing mode
• Switch between Edit ↔ Preview instantly

✨ 5. Error-Resilient Architecture

The editor handles:
• Invalid JSX
• Missing component files
• Network failures
• Serialization errors
• Unexpected runtime crashes

Fallback modes: "loading" and "error" ensure graceful UI states.

⸻

📦 Tech Stack

Layer Technology
Framework Next.js 16
UI React 19, Tailwind CSS, shadcn/ui, Lucide Icons
State Context API + Local state
Notifications Sonner
JSX Compiler @babel/standalone
Storage File-based (text components) — easy to replace with KV/DB

⸻

📁 Project Structure

/app
/api
/component/[id]
route.ts # Load + Save component
/component/reset/[id]
route.ts # Reset component to original
/lib/editor
serializeDomToString.ts
serializeStringToJsx.ts
elements.ts
/context
EditorContext.tsx
/components
Toolbar.tsx
EditorCanvas.tsx
Spinner.tsx
/data
hero.txt
hero.original.txt

⸻

⚙️ How It Works

1. Load Component

GET /api/component/:id

Loads the component’s .txt file → compiles → mounts into editor.

2. Save Component

PUT /api/component/:id

Frontend serializes DOM → JSX → sends to backend.

3. Reset Component

POST /api/component/reset/:id

Copies id.original.txt → id.txt and returns fresh JSX.

⸻

🧩 Editor Context Capabilities

The EditorContext exposes:
• Component — current rendered component or "loading" | "error"
• editableMode
• saveState → { dirty, saving, error, success }
• resetToOriginalComponent()
• saveComponentHandler()
• activeElement + elementType
• lockedBoundingClients
• userAppAreaRef
• toggleEditableMode()

⸻

🛠 Development

Install dependencies

pnpm install

Run dev server

pnpm dev

Build for production

pnpm build

⸻

🧪 API Testing With Curl

Restore a component:

curl -X POST http://localhost:3000/api/component/reset/hero

⸻

🚧 Roadmap
• Add Upstash Redis or Vercel Blob storage
• Multi-component editing support
• Component version history
• Drag & drop layout editing
• Cloud sync
• Reusable style presets

⸻
