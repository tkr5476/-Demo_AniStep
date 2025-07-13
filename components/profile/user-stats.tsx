"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

export function UserStats() {
  const genreData = [
    { name: "アクション", count: 25, color: "#0ea5e9" },
    { name: "ドラマ", count: 18, color: "#f97316" },
    { name: "コメディ", count: 15, color: "#10b981" },
    { name: "SF", count: 12, color: "#8b5cf6" },
    { name: "恋愛", count: 8, color: "#f59e0b" },
  ]

  const monthlyData = [
    { month: "10月", count: 8 },
    { month: "11月", count: 12 },
    { month: "12月", count: 15 },
    { month: "1月", count: 10 },
  ]

  const totalWatched = genreData.reduce((sum, genre) => sum + genre.count, 0)

  return (
    <div className="space-y-6">
      {/* Monthly Viewing */}
      <Card>
        <CardHeader>
          <CardTitle>月別視聴数</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Bar dataKey="count" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Genre Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>ジャンル別視聴数</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {genreData.map((genre) => (
              <div key={genre.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{genre.name}</span>
                  <span className="text-gray-500">{genre.count}作品</span>
                </div>
                <Progress
                  value={(genre.count / totalWatched) * 100}
                  className="h-2"
                  style={{
                    background: `linear-gradient(to right, ${genre.color} 0%, ${genre.color} 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>視聴統計</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-sky-50 rounded-lg">
              <div className="text-2xl font-bold text-sky-600">328</div>
              <div className="text-sm text-gray-600">総視聴話数</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">8.4</div>
              <div className="text-sm text-gray-600">平均評価</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
