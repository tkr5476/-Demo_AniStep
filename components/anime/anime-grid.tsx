"use client"

import { AnimeCard } from "./anime-card"

export function AnimeGrid() {
  const animes = [
    {
      id: 1,
      title: "機動戦士Gundam GQuuuuuuX",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["黒沢ともよ", "石川由依", "土屋神葉", "川田紳司", "新祐樹"],
      staff: ["サンライズ", "矢立肇", "富野由悠季", "加藤浩", "蓮尾理之"],
    },
    {
      id: 2,
      title: "ウィッチウォッチ",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["川口莉奈", "天﨑滉平", "綿木ともり", "鈴木崚汰"],
      staff: ["銀魂監督", "集英社", "週刊少年ジャンプ", "歴史追憶", "橋本由香利"],
    },
    {
      id: 3,
      title: "mono",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["三川華月", "古賀葵", "遠野ひかる", "上田麗奈", "河瀬茉希"],
      staff: ["めそ", "芳文社", "まんがタイムきららフォワード", "愛敬亮太", "米内山陽子"],
    },
    {
      id: 4,
      title: "リコリス・リコイル Friends are thieves of...",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["安済知佳", "若山詩音", "小清水亜美", "久野美咲", "さかき孝輔"],
      staff: ["Spider Lily", "足立慎吾", "山田尚子", "森田和明", "合田浩章"],
    },
    {
      id: 5,
      title: "Summer Pockets",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["千葉翔也", "小原好美", "高森奈津美", "榊田竜斗", "岩井映美里"],
      staff: ["VISUAL ARTS", "Key", "Summer Pockets", "小林智樹", "大塚雅彦"],
    },
    {
      id: 6,
      title: "ざつ旅 -That's Journey-",
      image: "/placeholder.svg?height=300&width=200",
      cast: ["月城日花", "鈴代紗弓", "平塚紗衣", "日笠陽子", "佐藤聡美"],
      staff: ["石黒正数", "株式会社KADOKAWA", "電撃マオウ", "連載", "渡邊政治"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  )
}
