import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { HTMLAttributes } from "react";

export function ThemeToggle(props: HTMLAttributes<HTMLDivElement>) {
  const { theme, setTheme } = useTheme();
  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(v) => v && setTheme(v)}
      className={`glass rounded-full p-1 ${props.className ?? ""}`}
    >
      <ToggleGroupItem value="light" aria-label="Light mode" className="rounded-full">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode" className="rounded-full">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="System theme" className="rounded-full">
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
