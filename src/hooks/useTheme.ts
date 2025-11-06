"use client"

import { useTheme } from "next-themes"

export function useCustomTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    toggleTheme,
    isDark: resolvedTheme === "dark"
  }
}