import { AppSidebar } from "@/components/app-sidebar";
import { SignupForm } from "@/components/user-components/signup-form";
import { Button } from "@/components/ui/button";
import { Undo2, Redo2, Save } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TypographyEditController } from "@/components/ui/typography-edit-controller";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            /> */}
          <TypographyEditController />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Submit">
              <Undo2 />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Submit">
              <Redo2 />
            </Button>
            <Button size="sm" aria-label="Submit" disabled>
              Save
              <Save />
            </Button>
          </div>
        </header>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 cursor-crosshair **:cursor-inherit">
          <div className="w-xl max-w-sm md:max-w-4xl">
            <SignupForm />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
