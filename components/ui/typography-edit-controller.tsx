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
  SelectItemColor,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Bold,
  Italic,
  Underline,
  TextAlignStart,
  TextAlignCenter,
  TextAlignEnd,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
export function TypographyEditController({
  ...props
}: React.ComponentProps<typeof Select>) {
  return (
    <div className="flex items-center gap-2">
      <Select>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Heading" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Headings</SelectLabel>
            <SelectItem value="apple">Heading 1</SelectItem>
            <SelectItem value="banana">Heading 2</SelectItem>
            <SelectItem value="blueberry">Heading 3</SelectItem>
            <SelectItem value="grapes">Heading 4</SelectItem>
            <SelectItem value="pineapple">Heading 5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <TextAlignStart className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <TextAlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <TextAlignEnd className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <Select>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Color" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="apple">Color 1</SelectItem>
            <SelectItem value="banana">Color 2</SelectItem>
            <SelectItem value="blueberry">Color 3</SelectItem>
            <SelectItem value="grapes">Color 4</SelectItem>
            <SelectItem value="pineapple">Color 5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AlignGroup() {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Heading" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Headings</SelectLabel>
              <SelectItem value="apple">Heading 1</SelectItem>
              <SelectItem value="banana">Heading 2</SelectItem>
              <SelectItem value="blueberry">Heading 3</SelectItem>
              <SelectItem value="grapes">Heading 4</SelectItem>
              <SelectItem value="pineapple">Heading 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">
          <TextAlignStart />
        </Button>

        <Button variant="outline">
          <TextAlignEnd />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterPlusIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  );
}
