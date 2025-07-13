"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Target, Clock, Heart, Zap, Users, Award, Crown, Gem } from "lucide-react"

export default function BadgesPage() {
  const [filter, setFilter] = useState("all")

  const allBadges = [
    {
      id: 1,
      name: "視聴マスター",
      description: "100作品以上視聴完了",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      rarity: "レア",
      category: "視聴",
      earned: true,
      earnedAt: "2024年1月15日",
      progress: 100,
      target: 100,
    },
    {
      id: 2,
      name: "レビューの達人",
      description: "50件以上のレビューを投稿",
      icon: Star,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      rarity: "コモン",
      category: "コミュニティ",
      earned: true,
      earnedAt: "2024年1月10日",
      progress: 50,
      target: 50,
    },
    {
      id: 3,
      name: "時間の支配者",
      description: "300時間以上視聴",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      rarity: "アンコモン",
      category: "視聴",
      earned: true,
      earnedAt: "2024年1月5日",
      progress: 300,
      target: 300,
    },
    {
      id: 4,
      name: "完走王",
      description: "50作品を最後まで視聴",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-100",
      rarity: "コモン",
      category: "視聴",
      earned: true,
      earnedAt: "2023年12月20日",
      progress: 50,
      target: 50,
    },
    {
      id: 5,
      name: "人気者",
      description: "フォロワー100人達成",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-100",
      rarity: "レア",
      category: "ソーシャル",
      earned: false,
      progress: 65,
      target: 100,
    },
    {
      id: 6,
      name: "スピードウォッチャー",
      description: "1週間で10作品視聴",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      rarity: "エピック",
      category: "チャレンジ",
      earned: false,
      progress: 7,
      target: 10,
    },
    {
      id: 7,
      name: "コミュニティリーダー",
      description: "100件のコメントを投稿",
      icon: Users,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
      rarity: "アンコモン",
      category: "コミュニティ",
      earned: false,
      progress: 78,
      target: 100,
    },
    {
      id: 8,
      name: "伝説の視聴者",
      description: "1000作品視聴完了",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-200",
      rarity: "レジェンダリー",
      category: "視聴",
      earned: false,
      progress: 234,
      target: 1000,
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
      case "レジェンダリー":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case "コモン":
        return <Award className="w-4 h-4" />
      case "アンコモン":
        return <Star className="w-4 h-4" />
      case "レア":
        return <Trophy className="w-4 h-4" />
      case "エピック":
        return <Crown className="w-4 h-4" />
      case "レジェンダリー":
        return <Gem className="w-4 h-4" />
      default:
        return <Award className="w-4 h-4" />
    }
  }

  const filteredBadges = allBadges.filter((badge) => {
    if (filter === "earned") return badge.earned
    if (filter === "available") return !badge.earned
    return true
  })

  const earnedCount = allBadges.filter((badge) => badge.earned).length
  const totalCount = allBadges.length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">バッジコレクション</h1>
          <p className="text-lg text-gray-600 mb-6">アニメ視聴の成果を記録し、新しい目標に挑戦しよう</p>

          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">{earnedCount}</div>
              <div className="text-sm text-gray-500">獲得済み</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{totalCount - earnedCount}</div>
              <div className="text-sm text-gray-500">未獲得</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{Math.round((earnedCount / totalCount) * 100)}%</div>
              <div className="text-sm text-gray-500">達成率</div>
            </div>
          </div>

          <Progress value={(earnedCount / totalCount) * 100} className="max-w-md mx-auto h-3" />
        </div>

        {/* Filter Tabs */}
        <Tabs value={filter} onValueChange={setFilter} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">すべて</TabsTrigger>
            <TabsTrigger value="earned">獲得済み</TabsTrigger>
            <TabsTrigger value="available">未獲得</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBadges.map((badge) => {
                const Icon = badge.icon
                const progressPercentage = (badge.progress / badge.target) * 100

                return (
                  <Card
                    key={badge.id}
                    className={`transition-all duration-200 hover:shadow-lg ${
                      badge.earned ? "ring-2 ring-sky-200" : "opacity-80"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-full ${badge.bgColor} ${badge.earned ? "" : "opacity-60"}`}>
                          <Icon className={`w-6 h-6 ${badge.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{badge.name}</h3>
                          <Badge className={getRarityColor(badge.rarity)} variant="secondary">
                            {getRarityIcon(badge.rarity)}
                            <span className="ml-1">{badge.rarity}</span>
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{badge.description}</p>

                      {badge.earned ? (
                        <div className="text-xs text-green-600 font-medium">✓ 獲得日: {badge.earnedAt}</div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">進捗</span>
                            <span className="font-medium">
                              {badge.progress}/{badge.target}
                            </span>
                          </div>
                          <Progress value={progressPercentage} className="h-2" />
                          <div className="text-xs text-gray-500">あと{badge.target - badge.progress}で獲得</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">カテゴリ別バッジ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["視聴", "コミュニティ", "ソーシャル", "チャレンジ"].map((category) => {
              const categoryBadges = allBadges.filter((badge) => badge.category === category)
              const earnedInCategory = categoryBadges.filter((badge) => badge.earned).length

              return (
                <Card key={category} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                    <div className="text-2xl font-bold text-sky-600 mb-1">
                      {earnedInCategory}/{categoryBadges.length}
                    </div>
                    <Progress value={(earnedInCategory / categoryBadges.length) * 100} className="h-2" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
