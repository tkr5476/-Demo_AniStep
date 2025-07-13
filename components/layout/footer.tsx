export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-4">
          <span>© 2025 AniStep. All rights reserved.</span>
          <span className="text-orange-400">•</span>
          <button className="hover:text-orange-400 transition-colors">プライバシーポリシー</button>
          <span className="text-orange-400">•</span>
          <button className="hover:text-orange-400 transition-colors">利用規約</button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs">Powered by</span>
          <div className="w-4 h-4 bg-gradient-to-r from-sky-400 to-orange-500 rounded"></div>
          <span className="font-medium text-white">AniStep</span>
        </div>
      </div>
    </footer>
  )
}
