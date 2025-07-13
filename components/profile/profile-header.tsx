"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Edit, Trophy, Eye, Heart } from "lucide-react"

export function ProfileHeader() {
  const user = {
    name: "田中アニメ好き",
    joinDate: "2023年4月",
    totalWatched: 76,
    totalEpisodes: 328,
    favoriteGenres: ["アクション", "ドラマ", "SF"],
    badgeCount: 12,
    reviewCount: 42,
  }

  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
            <AvatarFallback className="text-2xl bg-gradient-to-r from-sky-400 to-orange-500 text-white">
              田
            </AvatarFallback>
          </Avatar>

          {/* User Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <div className="flex items-center text-gray-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>サービス開始日: {user.joinDate}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-sky-500" />
                <div>
                  <div className="font-semibold text-gray-900">{user.totalWatched}</div>
                  <div className="text-sm text-gray-500">視聴作品</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-semibold text-gray-900">{user.badgeCount}</div>
                  <div className="text-sm text-gray-500">獲得バッジ</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-semibold text-gray-900">{user.reviewCount}</div>
                  <div className="text-sm text-gray-500">レビュー</div>
                </div>
              </div>
            </div>

            {/* Favorite Genres */}
            <div>
              <div className="text-sm text-gray-500 mb-2">好きなジャンル</div>
              <div className="flex flex-wrap gap-2">
                {user.favoriteGenres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <Button variant="outline" className="border-2 border-sky-400 text-sky-600 hover:bg-sky-50 bg-transparent">
            <Edit className="w-4 h-4 mr-2" />
            プロフィール編集
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
