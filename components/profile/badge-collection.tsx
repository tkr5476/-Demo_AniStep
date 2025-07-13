"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Clock, Heart, Zap } from "lucide-react"

export function BadgeCollection() {
  const earnedBadges = [
    {
      id: 1,
      name: "視聴マスター",
      description: "100作品以上視聴完了",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      earnedAt: "2024年1月15日",
      rarity: "レア",
    },
    {
      id: 2,
      name: "レビューの達人",
      description: "50件以上のレビューを投稿",
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      earnedAt: "2024年1月10日",
      rarity: "コモン",
    },
    {
      id: 3,
      name: "時間の支配者",
      description: "300時間以上視聴",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      earnedAt: "2024年1月5日",
      rarity: "アンコモン",
    },
    {
      id: 4,
      name: "完走王",
      description: "50作品を最後まで視聴",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-100",
      earnedAt: "2023年12月20日",
      rarity: "コモン",
    },
  ]

  const challengeBadges = [
    {
      id: 5,
      name: "人気者",
      description: "フォロワー100人達成",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-100",
      progress: 65,
      target: 100,
      rarity: "レア",
    },
    {
      id: 6,
      name: "スピードウォッチャー",
      description: "1週間で10作品視聴",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      progress: 7,
      target: 10,
      rarity: "エピック",
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "コモン":
        return "bg-gray-100 text-gray-700"
      case "アンコモン":
        return "bg-green-100 text-green-700"
      case "レア":
        return "bg-blue-100 text-blue-700"
      case "エピック":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-8">
      {/* Earned Badges */}
      <Card>
        <CardHeader>
          <CardTitle>獲得済みバッジ ({earnedBadges.length}個)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earnedBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full ${badge.bgColor}`}>
                      <Icon className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                      <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                        {badge.rarity}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{badge.description}</p>

                  <div className="text-xs text-gray-500">獲得日: {badge.earnedAt}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Challenge Badges */}
      <Card>
        <CardHeader>
          <CardTitle>チャレンジ中のバッジ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengeBadges.map((badge) => {
              const Icon = badge.icon
              const progressPercentage = (badge.progress / badge.target) * 100

              return (
                <div key={badge.id} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full ${badge.bgColor} opacity-60`}>
                      <Icon className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                      <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                        {badge.rarity}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{badge.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>進捗</span>
                      <span>
                        {badge.progress}/{badge.target}
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
