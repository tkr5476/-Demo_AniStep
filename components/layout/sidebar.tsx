"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Home,
  User,
  BookOpen,
  Play,
  Eye,
  EyeOff,
  Pause,
  Calendar,
  TrendingUp,
  Flame,
  Search,
  ChevronRight,
} from "lucide-react"

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("home")

  const navigationItems = [
    { id: "home", label: "ホーム", icon: Home, href: "/" },
    { id: "profile", label: "プロフィール", icon: User, href: "/profile" },
    { id: "record", label: "記録する", icon: BookOpen, href: "/record" },
  ]

  const libraryItems = [
    { id: "watching", label: "見てるアニメ", icon: Play, href: "/library/watching" },
    { id: "want-to-watch", label: "見たいアニメ", icon: Eye, href: "/library/want-to-watch" },
    { id: "watched", label: "見たアニメ", icon: EyeOff, href: "/library/watched", active: true },
    { id: "paused", label: "一時中断してるアニメ", icon: Pause, href: "/library/paused" },
    { id: "dropped", label: "視聴中止したアニメ", icon: EyeOff, href: "/library/dropped" },
  ]

  const discoverItems = [
    { id: "current", label: "今期のアニメ", icon: Calendar, href: "/discover/current" },
    { id: "upcoming", label: "来期のアニメ", icon: TrendingUp, href: "/discover/upcoming" },
    { id: "previous", label: "前期のアニメ", icon: Calendar, href: "/discover/previous" },
    { id: "popular", label: "人気アニメ", icon: Flame, href: "/discover/popular" },
    { id: "new", label: "新規登録アニメ", icon: TrendingUp, href: "/discover/new" },
  ]

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold text-white">AniStep</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback className="bg-gray-600 text-white">tkr</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">tkr___9</div>
            <div className="text-xs text-gray-400">@tkr___9</div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="作品名や人物名などで検索..."
            className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-sky-400"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                    : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-400"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Library Section */}
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">ライブラリ</h3>
          <nav className="space-y-1">
            {libraryItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group ${
                    item.active
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                      : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm flex-1">{item.label}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Discover Section */}
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">見つける</h3>
          <nav className="space-y-1">
            {discoverItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm flex-1">{item.label}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Misc Section */}
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Misc</h3>
        </div>
      </div>
    </aside>
  )
}
