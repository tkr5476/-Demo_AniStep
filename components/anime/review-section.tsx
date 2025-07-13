"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, MessageCircle } from "lucide-react"

interface ReviewSectionProps {
  animeId: number
}

export function ReviewSection({ animeId }: ReviewSectionProps) {
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const reviews = [
    {
      id: 1,
      user: {
        name: "アニメ太郎",
        avatar: "/placeholder-user.jpg",
      },
      rating: 5,
      content:
        "素晴らしい作品でした！ストーリーの展開が予想できず、最後まで飽きることなく視聴できました。キャラクターの成長も丁寧に描かれていて、感情移入しやすかったです。",
      date: "2024年1月15日",
      likes: 12,
      replies: 3,
    },
    {
      id: 2,
      user: {
        name: "視聴者花子",
        avatar: "/placeholder-user.jpg",
      },
      rating: 4,
      content:
        "アクションシーンの迫力がすごい！作画も安定していて、戦闘シーンは特に見応えがありました。ただ、一部のキャラクターの動機がもう少し深く描かれていればと思います。",
      date: "2024年1月12日",
      likes: 8,
      replies: 1,
    },
    {
      id: 3,
      user: {
        name: "レビュー次郎",
        avatar: "/placeholder-user.jpg",
      },
      rating: 5,
      content:
        "この作品に出会えて本当に良かった。人間ドラマとアクションのバランスが絶妙で、毎話ハラハラドキドキしながら見ていました。続編も楽しみです！",
      date: "2024年1月10日",
      likes: 15,
      replies: 5,
    },
  ]

  const handleSubmitReview = () => {
    if (newReview.trim() && newRating > 0) {
      // Submit review logic here
      setNewReview("")
      setNewRating(0)
      setShowReviewForm(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Review Form */}
      <Card>
        <CardHeader>
          <CardTitle>レビューを書く</CardTitle>
        </CardHeader>
        <CardContent>
          {!showReviewForm ? (
            <Button onClick={() => setShowReviewForm(true)} className="w-full">
              レビューを投稿する
            </Button>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">評価</label>
                {renderStars(newRating, true, setNewRating)}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">コメント</label>
                <Textarea
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="この作品についての感想を書いてください..."
                  rows={4}
                />
              </div>

              <div className="flex space-x-2">
                <Button onClick={handleSubmitReview} className="bg-sky-400 hover:bg-sky-500">
                  投稿する
                </Button>
                <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                  キャンセル
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                  <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.user.name}</h4>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{review.content}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-sky-500">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-sky-500">
                      <MessageCircle className="w-4 h-4" />
                      <span>{review.replies}</span>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
