"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown, Grid3X3, LayoutGrid } from "lucide-react"

export function Header() {
  const [currentSeason, setCurrentSeason] = useState("2025年春")
  const [viewMode, setViewMode] = useState("grid")

  const seasons = ["2025年冬", "2025年春", "2025年夏"]
  const currentIndex = seasons.indexOf(currentSeason)

  const navigateSeason = (direction: "prev" | "next") => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentSeason(seasons[currentIndex - 1])
    } else if (direction === "next" && currentIndex < seasons.length - 1) {
      setCurrentSeason(seasons[currentIndex + 1])
    }
  }

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Season Navigation */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateSeason("prev")}
            disabled={currentIndex === 0}
            className="text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">{seasons[currentIndex - 1] || ""}</span>
            <div className="flex items-center space-x-1 px-3 py-1 bg-gray-700 rounded-lg">
              <span className="text-white font-medium">{currentSeason}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-gray-400 text-sm">{seasons[currentIndex + 1] || ""}</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateSeason("next")}
            disabled={currentIndex === seasons.length - 1}
            className="text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Page Title */}
        <h1 className="text-xl font-bold text-white">{currentSeason}のアニメ</h1>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-700 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-gray-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-gray-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
