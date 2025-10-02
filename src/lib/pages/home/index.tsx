"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  const [numbers, setNumbers] = useState<number[]>([])

  const generateNumbers = () => {
    const newNumbers: number[] = []
    while (newNumbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1
      if (!newNumbers.includes(num)) {
        newNumbers.push(num)
      }
    }
    setNumbers(newNumbers.sort((a, b) => a - b))
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          행운의 로또 번호를 뽑아보세요
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
          버튼을 클릭하면 1부터 45까지의 숫자 중 6개를 랜덤으로 선택해드립니다
        </p>

        <Card className="p-6 md:p-12 mb-6 md:mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
          {numbers.length === 0 ? (
            <div className="py-8 md:py-12">
              <p className="text-gray-400 text-base md:text-lg">
                아래 버튼을 눌러 번호를 생성해주세요
              </p>
            </div>
          ) : (
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
              {numbers.map((num, index) => (
                <div
                  key={index}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg"
                >
                  {num}
                </div>
              ))}
            </div>
          )}
        </Card>

        <Button
          onClick={generateNumbers}
          size="lg"
          className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          번호 뽑기
        </Button>

        <div className="mt-8 md:mt-16 p-4 md:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-xs md:text-sm text-gray-600">
            💡 <strong>팁:</strong> 마음에 드는 번호가 나올 때까지 여러 번 뽑아보세요!
          </p>
        </div>
      </div>
    </div>
  )
}
