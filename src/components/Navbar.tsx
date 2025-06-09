"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="text-2xl font-bold text-blue-700">Summiya</div>
      <ul className="flex space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Dark mode button only render after mount */}
      {mounted && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>
      )}
    </nav>
  )
}
