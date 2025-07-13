"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, List, Play } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Anime {
  id: number
  title: string
  image: string
  cast: string[]
  staff: string[]
}

interface AnimeCardProps {
  anime: Anime
}

export function AnimeCard({ anime }: AnimeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="bg-gray-800 border-gray-700 overflow-hidden group transition-all duration-200 hover:bg-gray-750"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Anime Poster */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={anime.image || "/placeholder.svg"}
            alt={anime.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button size="sm" className="bg-sky-400 hover:bg-sky-500 text-white">
                <Play className="w-4 h-4 mr-1" />
                詳細
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-white font-medium text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{anime.title}</h3>

          {/* Viewing Status */}
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded border border-green-500/30">
              見たアニメ
            </span>
            <span className="px-2 py-1 text-xs bg-sky-500/20 text-sky-400 rounded border border-sky-500/30">
              見てるアニメ
            </span>
            <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded border border-orange-500/30">
              見たいアニメ
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-4">
            <Button
              size="sm"
              className="bg-orange-600 hover:bg-orange-700 text-white border border-orange-500 flex-1 mr-2"
            >
              <List className="w-4 h-4 mr-1" />
              リスト
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700 p-2">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem className="text-white hover:bg-orange-500/10 hover:text-orange-400">
                  視聴中に追加
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-orange-500/10 hover:text-orange-400">
                  視聴済みに追加
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-orange-500/10 hover:text-orange-400">
                  視聴予定に追加
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Cast */}
          <div className="mb-3">
            <h4 className="text-xs font-medium text-gray-400 mb-1">キャスト</h4>
            <div className="text-xs text-gray-300 space-y-0.5">
              {anime.cast.slice(0, 4).map((actor, index) => (
                <div key={index}>{actor}</div>
              ))}
            </div>
          </div>

          {/* Staff */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 mb-1">スタッフ</h4>
            <div className="text-xs text-gray-300 space-y-0.5">
              {anime.staff.slice(0, 4).map((member, index) => (
                <div key={index}>{member}</div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
