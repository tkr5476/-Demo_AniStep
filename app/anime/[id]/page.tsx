"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Play, Plus, Check, Clock, Heart, Share2, Users } from "lucide-react"
import { ReviewSection } from "@/components/anime/review-section"

export default function AnimeDetailPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState<"watching" | "completed" | "plan_to_watch" | null>("watching")
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock data - would come from API
  const anime = {
    id: Number.parseInt(params.id),
    title: "進撃の巨人",
    englishTitle: "Attack on Titan",
    image: "/placeholder.svg?height=400&width=300",
    bannerImage: "/placeholder.svg?height=300&width=800",
    rating: 9.0,
    year: 2013,
    season: "春",
    episodes: 25,
    duration: "24分",
    studio: "WIT STUDIO",
    genres: ["アクション", "ドラマ", "ファンタジー"],
    synopsis:
      "人類は巨人の脅威に晒され、高い壁に囲まれた街で生活していた。しかし、超大型巨人の出現により壁が破られ、人類は絶望的な戦いを強いられることになる。主人公エレン・イェーガーは、母親を巨人に殺され、巨人への復讐を誓う。",
    stats: {
      watching: 15420,
      completed: 89650,
      planToWatch: 23180,
      dropped: 1250,
    },
  }

  const getStatusIcon = () => {
    switch (status) {
      case "watching":
        return <Play className="w-4 h-4" />
      case "completed":
        return <Check className="w-4 h-4" />
      case "plan_to_watch":
        return <Clock className="w-4 h-4" />
      default:
        return <Plus className="w-4 h-4" />
    }
  }

  const getStatusLabel = () => {
    switch (status) {
      case "watching":
        return "視聴中"
      case "completed":
        return "視聴済み"
      case "plan_to_watch":
        return "視聴予定"
      default:
        return "リストに追加"
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "watching":
        return "bg-sky-400 hover:bg-sky-500"
      case "completed":
        return "bg-green-500 hover:bg-green-600"
      case "plan_to_watch":
        return "bg-orange-500 hover:bg-orange-600"
      default:
        return "bg-gray-400 hover:bg-gray-500"
    }
  }

  const cycleStatus = () => {
    const statuses = [null, "plan_to_watch", "watching", "completed"]
    const currentIndex = statuses.indexOf(status)
    const nextIndex = (currentIndex + 1) % statuses.length
    setStatus(statuses[nextIndex] as any)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner Section */}
      <div className="relative">
        <div className="h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
          <Image
            src={anime.bannerImage || "/placeholder.svg"}
            alt={anime.title}
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <Image
                src={anime.image || "/placeholder.svg"}
                alt={anime.title}
                width={200}
                height={280}
                className="rounded-lg shadow-lg border-4 border-white"
              />

              <div className="flex-1 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{anime.title}</h1>
                <p className="text-lg text-gray-200 mb-4">{anime.englishTitle}</p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{anime.rating}</span>
                  </div>
                  <span>{anime.year}</span>
                  <span>{anime.episodes}話</span>
                  <span>{anime.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
                    <Badge key={genre} className="bg-white/20 text-white border-white/30">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3">
            <Button onClick={cycleStatus} className={`${getStatusColor()} text-white`}>
              {getStatusIcon()}
              <span className="ml-2">{getStatusLabel()}</span>
            </Button>

            <Button
              variant="outline"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "border-red-500 text-red-600 bg-red-50" : ""}
            >
              <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-red-500" : ""}`} />
              お気に入り
            </Button>

            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              シェア
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">概要</TabsTrigger>
                <TabsTrigger value="reviews">レビュー</TabsTrigger>
                <TabsTrigger value="stats">統計</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>あらすじ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{anime.synopsis}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <ReviewSection animeId={anime.id} />
              </TabsContent>

              <TabsContent value="stats" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>視聴統計</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-sky-50 rounded-lg">
                        <Users className="w-8 h-8 text-sky-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-sky-600">{anime.stats.watching.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">視聴中</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Check className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">
                          {anime.stats.completed.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">視聴済み</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>作品情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">放送年</span>
                  <span className="font-medium">
                    {anime.year}年{anime.season}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">話数</span>
                  <span className="font-medium">{anime.episodes}話</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">制作会社</span>
                  <span className="font-medium">{anime.studio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">1話あたり</span>
                  <span className="font-medium">{anime.duration}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>関連作品</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=60&width=40"
                      alt="関連作品"
                      width={40}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <div className="font-medium text-sm">進撃の巨人 Season 2</div>
                      <div className="text-xs text-gray-500">2017年</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=60&width=40"
                      alt="関連作品"
                      width={40}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <div className="font-medium text-sm">進撃の巨人 Season 3</div>
                      <div className="text-xs text-gray-500">2018年</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
