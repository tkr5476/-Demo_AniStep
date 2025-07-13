"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Trophy, User } from "lucide-react"

interface ProfileTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  const tabs = [
    { id: "overview", label: "概要", icon: User },
    { id: "badges", label: "バッジ", icon: Trophy },
    { id: "stats", label: "統計", icon: BarChart3 },
  ]

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-sky-400 text-sky-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </Button>
          )
        })}
      </nav>
    </div>
  )
}
