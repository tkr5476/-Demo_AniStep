"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Trophy, Eye, Edit, Star } from "lucide-react"

export function ProfileContent() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-start space-x-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder-user.jpg" alt="tkr___9" />
              <AvatarFallback className="bg-gray-600 text-white text-xl">tkr</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">tkr___9</h1>
              <p className="text-gray-400 mb-4">@tkr___9</p>

              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">サービス開始日: 2025-07-02 (11日目)</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-sm text-gray-400">Records</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-gray-400">Watching</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-sm text-gray-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
              </div>
            </div>

            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Edit className="w-4 h-4 mr-2" />
              プロフィール編集
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            概要
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            アクティビティ
          </TabsTrigger>
          <TabsTrigger value="badges" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            バッジ
          </TabsTrigger>
          <TabsTrigger value="stats" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            統計
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">最近の活動</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Eye className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">まだ活動がありません</p>
                  <p className="text-sm text-gray-500 mt-2">アニメを視聴して記録をつけてみましょう</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">視聴統計</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">総視聴時間</span>
                    <span className="text-white font-semibold">0時間</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">平均評価</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">-</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">お気に入り</span>
                    <span className="text-white font-semibold">0作品</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="badges" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">獲得バッジ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Trophy className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">まだバッジを獲得していません</p>
                <p className="text-sm text-gray-500 mt-2">アニメを視聴してバッジを獲得しましょう</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
