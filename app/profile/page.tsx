"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProfileContent } from "@/components/profile/profile-content"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <ProfileContent />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
