import { AppSidebar } from "@/components/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { EditorProvider } from "@/components/editor-components/editor-provider";
import UserApp from "@/components/user-components/user-app";
import EditorPreview from "@/components/editor-components/editor-preview";
import Header from "@/components/editor-components/header";
import Hero from "@/components/user-components/hero";

export default function Page() {
  return (
    <EditorProvider>
      <Header />
      {/* User app area */}
      <EditorPreview>
        <UserApp />
        {/* <Hero /> */}
      </EditorPreview>
    </EditorProvider>
  );
}
