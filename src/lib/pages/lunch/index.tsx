"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Utensils, RefreshCw } from "lucide-react"

const menus = [
  // 한식 점심 메뉴
  { name: "🍚 제육덮밥", category: "한식" },
  { name: "🐔 치킨마요덮밥", category: "한식" },
  { name: "🥢 소불고기 정식", category: "한식" },
  { name: "🍲 김치찌개 정식", category: "한식" },
  { name: "🥬 된장찌개 정식", category: "한식" },
  { name: "🐟 고등어구이 정식", category: "한식" },
  { name: "🍛 카레라이스", category: "한식" },
  { name: "🥩 함박스테이크 정식", category: "한식" },
  { name: "🍜 비빔국수", category: "한식" },
  { name: "🍲 순두부찌개", category: "한식" },
  { name: "🐙 낙지볶음덮밥", category: "한식" },
  { name: "🍲 갈비탕", category: "한식" },
  { name: "🍲 육개장", category: "한식" },
  { name: "🥘 해물뚝배기", category: "한식" },
  { name: "🥟 왕만두 세트", category: "한식" },
  
  // 양식 & 퓨전 런치
  { name: "🍝 까르보나라 파스타", category: "양식&퓨전" },
  { name: "🍝 알리오올리오", category: "양식&퓨전" },
  { name: "🍝 토마토 미트볼 파스타", category: "양식&퓨전" },
  { name: "🍝 크림 리조또", category: "양식&퓨전" },
  { name: "🍝 버섯 리조또", category: "양식&퓨전" },
  { name: "🥪 클럽 샌드위치", category: "양식&퓨전" },
  { name: "🥪 치킨 파니니", category: "양식&퓨전" },
  { name: "🥗 시저샐러드 + 수프 세트", category: "양식&퓨전" },
  { name: "🍳 오믈렛 라이스", category: "양식&퓨전" },
  { name: "🥩 비프 스테이크 덮밥", category: "양식&퓨전" },
  { name: "🐔 치킨커틀릿", category: "양식&퓨전" },
  { name: "🐷 포크커틀릿", category: "양식&퓨전" },
  { name: "🍖 바베큐 폭찹", category: "양식&퓨전" },
  { name: "🥪 햄&치즈 크로크무슈", category: "양식&퓨전" },
  { name: "🍕 마르게리타 피자 (하프)", category: "양식&퓨전" },
  
  // 아시아 점심 메뉴
  { name: "🍜 베트남 쌀국수", category: "아시아" },
  { name: "🥗 분짜", category: "아시아" },
  { name: "🍲 똠얌꿍", category: "아시아" },
  { name: "🍜 팟타이", category: "아시아" },
  { name: "🍛 일본식 카레", category: "아시아" },
  { name: "🍱 돈부리 (규동/가츠동)", category: "아시아" },
  { name: "🍜 우동", category: "아시아" },
  { name: "🍜 라멘 (돈코츠/쇼유)", category: "아시아" },
  { name: "🍲 마파두부덮밥", category: "아시아" },
  { name: "🍲 짜장면", category: "아시아" },
  { name: "🍲 짬뽕", category: "아시아" },
  { name: "🥟 군만두 세트", category: "아시아" },
  { name: "🥡 마라탕", category: "아시아" },
  { name: "🍲 훠궈 (런치 개인鍋)", category: "아시아" },
  { name: "🥢 볶음밥 (XO소스/야채/새우)", category: "아시아" },
]

export default function LunchPage() {
  const [menu, setMenu] = useState<{ name: string; category: string } | null>(null)

  const recommendMenu = () => {
    const randomIndex = Math.floor(Math.random() * menus.length)
    setMenu(menus[randomIndex])
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <Utensils className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-green-500" />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            오늘 뭐 먹지?
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            점심 메뉴 고민은 이제 그만! 랜덤으로 추천해드려요
          </p>
        </div>

        <Card className="p-6 md:p-12 mb-6 md:mb-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
          {!menu ? (
            <div className="py-8 md:py-12">
              <p className="text-gray-400 text-base md:text-lg">
                아래 버튼을 눌러 메뉴를 추천받아보세요
              </p>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              <div className="text-5xl md:text-8xl mb-4 md:mb-6">
                {menu.name.split(" ")[0]}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                {menu.name.split(" ")[1] || menu.name}
              </h2>
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                {menu.category}
              </div>
            </div>
          )}
        </Card>

        <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
          <Button
            onClick={recommendMenu}
            size="lg"
            className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            <Utensils className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            메뉴 추천받기
          </Button>
          {menu && (
            <Button
              onClick={recommendMenu}
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6"
            >
              <RefreshCw className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              다시 추천
            </Button>
          )}
        </div>

        <div className="mt-8 md:mt-16 p-4 md:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-xs md:text-sm text-gray-600">
            💡 <strong>팁:</strong> 마음에 안 들면 다시 추천받으세요!
          </p>
        </div>
      </div>
    </div>
  )
}
