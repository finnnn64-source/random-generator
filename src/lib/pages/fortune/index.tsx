"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, Star } from "lucide-react"

const fortunes = [
  { message: "최고의 하루가 될 거예요!", advice: "모든 일이 술술 풀릴 거예요 🎉", stars: 5 },
  { message: "행운이 가득한 날입니다", advice: "좋은 기회를 놓치지 마세요 ✨", stars: 5 },
  { message: "당신의 꿈이 이루어질 거예요", advice: "자신감을 가지고 도전하세요 🌟", stars: 5 },
  
  { message: "좋은 일이 생길 거예요", advice: "긍정적인 마음가짐을 유지하세요 😊", stars: 4 },
  { message: "새로운 기회가 찾아올 거예요", advice: "두려워하지 말고 앞으로 나아가세요 💪", stars: 4 },
  { message: "소중한 사람과 좋은 시간을 보낼 거예요", advice: "감사한 마음을 전해보세요 💝", stars: 4 },
  
  { message: "평범하지만 안정적인 하루예요", advice: "작은 행복을 찾아보세요 🌸", stars: 3 },
  { message: "무난한 하루가 될 거예요", advice: "차분하게 일상을 즐기세요 ☕", stars: 3 },
  { message: "조용히 흘러가는 하루입니다", advice: "여유를 가지고 쉬어가세요 🌿", stars: 3 },
  
  { message: "조금 조심해야 하는 날이에요", advice: "신중하게 생각하고 행동하세요 🤔", stars: 2 },
  { message: "작은 어려움이 있을 수 있어요", advice: "인내심을 가지고 극복하세요 💪", stars: 2 },
  { message: "오늘은 쉬어가는 게 좋겠어요", advice: "무리하지 말고 충분히 쉬세요 😴", stars: 2 },
  
  { message: "오늘은 조심스러운 하루예요", advice: "중요한 결정은 내일로 미루세요 ⏰", stars: 1 },
  { message: "시련이 있을 수 있지만 극복할 수 있어요", advice: "포기하지 말고 버티세요 🔥", stars: 1 },
  { message: "오늘은 집에서 쉬는 게 최고예요", advice: "에너지를 아껴두세요 🏠", stars: 1 },
]

export default function FortunePage() {
  const [fortune, setFortune] = useState<{ message: string; advice: string; stars: number } | null>(null)
  const [hasDrawn, setHasDrawn] = useState(false)

  useEffect(() => {
    // 로컬 스토리지에서 오늘 날짜와 저장된 운세 확인
    const today = new Date().toDateString()
    const savedDate = localStorage.getItem("fortuneDate")
    const savedFortune = localStorage.getItem("fortune")

    if (savedDate === today && savedFortune) {
      setFortune(JSON.parse(savedFortune))
      setHasDrawn(true)
    }
  }, [])

  const generateFortune = () => {
    if (hasDrawn) return
    
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    const selectedFortune = fortunes[randomIndex]
    
    setFortune(selectedFortune)
    setHasDrawn(true)
    
    // 로컬 스토리지에 저장
    const today = new Date().toDateString()
    localStorage.setItem("fortuneDate", today)
    localStorage.setItem("fortune", JSON.stringify(selectedFortune))
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <Cookie className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-orange-500" />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            오늘의 운세
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            포춘쿠키를 열어 오늘의 운세를 확인해보세요
          </p>
        </div>

        <Card className="p-6 md:p-12 mb-6 md:mb-8 bg-gradient-to-br from-orange-50 to-yellow-50 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
          {!fortune ? (
            <div className="py-8 md:py-12">
              <p className="text-gray-400 text-base md:text-lg">
                아래 버튼을 눌러 오늘의 운세를 확인해보세요
              </p>
            </div>
) : (
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-center mb-4 md:mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-7 h-7 md:w-10 md:h-10 ${
                      index < fortune.stars
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                {fortune.message}
              </h2>
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md">
                <p className="text-xs md:text-sm text-gray-500 mb-2">오늘의 조언</p>
                <p className="text-base md:text-xl text-gray-700">
                  {fortune.advice}
                </p>
              </div>
            </div>
          )}
        </Card>

        <Button
          onClick={generateFortune}
          size="lg"
          disabled={hasDrawn}
          className={`text-base md:text-lg px-6 py-5 md:px-8 md:py-6 ${
            hasDrawn
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
          }`}
        >
          <Cookie className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          {hasDrawn ? "오늘은 이미 확인했어요" : "포춘쿠키 열기"}
        </Button>

        <div className="mt-8 md:mt-16 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs md:text-sm text-gray-600">
            💡 <strong>참고:</strong> 하루에 한 번만 뽑을 수 있어요. 내일 다시 확인해주세요!
          </p>
        </div>
      </div>
    </div>
  )
}
