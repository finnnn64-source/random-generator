"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🎲 랜덤 생성기
          </Link>
          <div className="flex gap-4 flex-wrap">
            <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
              🎱 로또
            </Link>
            <Link href="/fortune" className="text-sm hover:text-orange-500 transition-colors">
              🥠 운세
            </Link>
            <Link href="/lunch" className="text-sm hover:text-green-600 transition-colors">
              🍽️ 점심
            </Link>
            <Link href="/nickname" className="text-sm hover:text-purple-600 transition-colors">
              👤 닉네임
            </Link>
            <Link href="/travel" className="text-sm hover:text-sky-600 transition-colors">
              ✈️ 여행
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
