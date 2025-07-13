"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, Calendar, Play, Check, Clock } from "lucide-react"

export function ViewingHistory() {
  const recentActivity = [
    {
      id: 1,
      anime: {
        title: "進撃の巨人",
        image: "/placeholder.svg?height=80&width=60",
        rating: 9.0,
      },
      status: "completed",
      date: "2024年1月15日",
      userRating: 5,
      episodes: "25/25話",
    },
    {
      id: 2,
      anime: {
        title: "鬼滅の刃",
        image: "/placeholder.svg?height=80&width=60",
        rating: 8.7,
      },
      status: "watching",
      date: "2024年1月14日",
      userRating: null,
      episodes: "18/26話",
    },
    {
      id: 3,
      anime: {
        title: "呪術廻戦",
        image: "/placeholder.svg?height=80&width=60",
        rating: 8.5,
      },
      status: "plan_to_watch",
      date: "2024年1月12日",
      userRating: null,
      episodes: "0/24話",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "watching":
        return <Play className="w-4 h-4 text-sky-500" />
      case "completed":
        return <Check className="w-4 h-4 text-green-500" />
      case "plan_to_watch":
        return <Clock className="w-4 h-4 text-orange-500" />
      default:
        return null
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "watching":
        return "視聴中"
      case "completed":
        return "視聴済み"
      case "plan_to_watch":
        return "視聴予定"
      default:
        return ""
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "watching":
        return "bg-sky-100 text-sky-700"
      case "completed":
        return "bg-green-100 text-green-700"
      case "plan_to_watch":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>最近の活動</span>
          <Button variant="outline" size="sm">
            すべて見る
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <Image
                src={activity.anime.image || "/placeholder.svg"}
                alt={activity.anime.title}
                width={60}
                height={80}
                className="rounded-md object-cover"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">{activity.anime.title}</h4>

                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={getStatusColor(activity.status)}>
                    {getStatusIcon(activity.status)}
                    <span className="ml-1">{getStatusLabel(activity.status)}</span>
                  </Badge>
                  <span className="text-sm text-gray-500">{activity.episodes}</span>
                </div>

                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {activity.date}
                  </div>

                  {activity.userRating && (
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {activity.userRating}/5
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
