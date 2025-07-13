"use client"

import { Badge } from "@/components/ui/badge"

interface ViewingStatusProps {
  statuses: string[]
}

export function ViewingStatus({ statuses }: ViewingStatusProps) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "見たアニメ":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "見てるアニメ":
        return "bg-sky-500/20 text-sky-400 border-sky-500/30"
      case "見たいアニメ":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "一時中断してるアニメ":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "視聴中止したアニメ":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="flex flex-wrap gap-1">
      {statuses.map((status, index) => (
        <Badge key={index} className={`px-2 py-1 text-xs rounded border ${getStatusStyle(status)}`} variant="outline">
          {status}
        </Badge>
      ))}
    </div>
  )
}
