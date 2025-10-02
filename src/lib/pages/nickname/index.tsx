"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, Copy, Check } from "lucide-react"

const adjectives = [
  "용감한", "빠른", "신비한", "강력한", "귀여운", "멋진", "화려한", "조용한",
  "날쌘", "지혜로운", "행복한", "차가운", "뜨거운", "반짝이는", "어두운", "밝은"
]

const nouns = [
  "호랑이", "독수리", "늑대", "용", "불사조", "여우", "사자", "팬더",
  "기사", "마법사", "전사", "닌자", "해적", "사무라이", "바이킹", "궁수"
]

const suffixes = [
  "", "님", "왕", "제", "신", "맨", "군", "짱"
]

export default function NicknamePage() {
  const [nickname, setNickname] = useState<string>("")
  const [copied, setCopied] = useState(false)

  const generateNickname = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
    
    setNickname(`${adj}${noun}${suffix}`)
    setCopied(false)
  }

  const copyNickname = () => {
    navigator.clipboard.writeText(nickname)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <User className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-purple-500" />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            닉네임 생성기
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            게임이나 커뮤니티에서 사용할 멋진 닉네임을 만들어드려요
          </p>
        </div>

        <Card className="p-6 md:p-12 mb-6 md:mb-8 bg-gradient-to-br from-purple-50 to-pink-50 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
          {!nickname ? (
            <div className="py-8 md:py-12">
              <p className="text-gray-400 text-base md:text-lg">
                아래 버튼을 눌러 닉네임을 생성해보세요
              </p>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6 w-full">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 md:mb-6">
                  {nickname}
                </h2>
                <Button
                  onClick={copyNickname}
                  variant="outline"
                  className="mt-2 md:mt-4"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      복사 완료!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      닉네임 복사
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </Card>

        <Button
          onClick={generateNickname}
          size="lg"
          className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <User className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          닉네임 생성하기
        </Button>

        <div className="mt-8 md:mt-16 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs md:text-sm text-gray-600">
            💡 <strong>팁:</strong> 마음에 드는 닉네임이 나올 때까지 여러 번 생성해보세요!
          </p>
        </div>
      </div>
    </div>
  )
}
