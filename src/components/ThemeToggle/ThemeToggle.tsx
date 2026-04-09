"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita a renderização até que o componente seja montado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 
  }

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </div>
  );
}