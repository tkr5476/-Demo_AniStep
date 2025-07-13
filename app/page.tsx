"use client"

import type React from "react"
import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimeGrid } from "@/components/anime/anime-grid"
import { RecommendationQuiz } from "@/components/recommendation/recommendation-quiz"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, TrendingUp } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentView, setCurrentView] = useState<"trending" | "recommended" | "search">("trending")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setCurrentView("search")
    }
  }

  const handleQuizComplete = (preferences: any) => {
    setShowQuiz(false)
    setCurrentView("recommended")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />

          {/* Hero Section */}
          <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">あなたにぴったりのアニメを見つけよう</h1>
                <p className="text-lg text-gray-600 mb-8">気分診断とパーソナライズされた推薦で、新しいアニメの世界へ</p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="アニメのタイトルで検索..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-sky-400"
                    />
                  </div>
                </form>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setShowQuiz(true)}
                    className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 text-lg"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    気分診断でおすすめを見つける
                  </Button>
                  <Button
                    onClick={() => setCurrentView("trending")}
                    variant="outline"
                    className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    人気作品を見る
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Quiz Modal */}
          {showQuiz && <RecommendationQuiz onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />}

          {/* Content Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <AnimeGrid view={currentView} searchQuery={searchQuery} />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  )
}
