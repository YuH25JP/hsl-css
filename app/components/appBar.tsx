"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function AppBar() {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const themeBtn = theme === "dark" ? <Moon /> : <Sun />;
  return (
    <div className="sticky top-0 flex items-center gap-4 border-b-2 backdrop-blur">
      <p className="text-3xl p-3">CSS in HSL</p>
      <div className="flex gap-2 ml-auto mr-3">
        <Button className="rounded-full" size="icon" variant="ghost" onClick={handleClick}>
          {themeBtn}
        </Button>
        <Button className="">Login</Button>
      </div>
    </div>
  );
}
