"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { X, ChevronRight } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: { id: string; label: string; emoji: string }[]
}

interface RecommendationQuizProps {
  onComplete: (preferences: any) => void
  onClose: () => void
}

export function RecommendationQuiz({ onComplete, onClose }: RecommendationQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "今の気分は？",
      options: [
        { id: "excited", label: "ワクワクしたい", emoji: "✨" },
        { id: "relaxed", label: "のんびりしたい", emoji: "😌" },
        { id: "emotional", label: "感動したい", emoji: "😭" },
        { id: "thrilled", label: "ハラハラしたい", emoji: "😱" },
      ],
    },
    {
      id: 2,
      question: "好きなジャンルは？",
      options: [
        { id: "action", label: "アクション", emoji: "⚔️" },
        { id: "romance", label: "恋愛", emoji: "💕" },
        { id: "comedy", label: "コメディ", emoji: "😂" },
        { id: "fantasy", label: "ファンタジー", emoji: "🧙‍♂️" },
      ],
    },
    {
      id: 3,
      question: "どのくらいの長さがいい？",
      options: [
        { id: "short", label: "短め（1-12話）", emoji: "⏱️" },
        { id: "medium", label: "普通（13-26話）", emoji: "📺" },
        { id: "long", label: "長め（27話以上）", emoji: "📚" },
        { id: "any", label: "気にしない", emoji: "🤷‍♀️" },
      ],
    },
  ]

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (optionId: string) => {
    const newAnswers = { ...answers, [currentQuestion]: optionId }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      onComplete(newAnswers)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-0 top-0">
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-center text-sky-600">アニメ診断</CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>
                質問 {currentQuestion + 1} / {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <h3 className="text-lg font-semibold text-center text-gray-900">{currentQ.question}</h3>

          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <Button
                key={option.id}
                variant="outline"
                onClick={() => handleAnswer(option.id)}
                className="w-full justify-between p-4 h-auto border-2 hover:border-sky-400 hover:bg-sky-50 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-left">{option.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
