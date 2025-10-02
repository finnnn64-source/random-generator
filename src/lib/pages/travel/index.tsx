"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plane, MapPin } from "lucide-react"

const destinations = [
  { 
    name: "제주도", 
    country: "국내", 
    description: "아름다운 자연과 맛있는 음식이 가득한 섬",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
  },
  { 
    name: "부산", 
    country: "국내", 
    description: "해운대 해수욕장과 신선한 해산물의 도시",
    image: "https://images.unsplash.com/photo-1608969405448-d9f0d4c29879?w=800&q=80"
  },
  { 
    name: "경주", 
    country: "국내", 
    description: "천년의 역사가 살아숨쉬는 고도",
    image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80"
  },
  { 
    name: "도쿄", 
    country: "해외", 
    description: "전통과 현대가 공존하는 일본의 수도",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
  },
  { 
    name: "오사카", 
    country: "해외", 
    description: "맛있는 음식의 천국",
    image: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=800&q=80"
  },
  { 
    name: "방콕", 
    country: "해외", 
    description: "화려한 사원과 맛있는 태국 음식",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80"
  },
  { 
    name: "다낭", 
    country: "해외", 
    description: "아름다운 해변과 저렴한 물가의 베트남",
    image: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=800&q=80"
  },
  { 
    name: "파리", 
    country: "해외", 
    description: "낭만의 도시, 에펠탑과 루브르 박물관",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
  },
  { 
    name: "뉴욕", 
    country: "해외", 
    description: "잠들지 않는 도시, 자유의 여신상",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
  },
  { 
    name: "싱가포르", 
    country: "해외", 
    description: "깨끗하고 안전한 도시국가",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80"
  },
  { 
    name: "강릉", 
    country: "국내", 
    description: "커피 향 가득한 바다의 도시",
    image: "https://images.unsplash.com/photo-1583468323330-9032ad490fed?w=800&q=80"
  },
  { 
    name: "전주", 
    country: "국내", 
    description: "한옥마을과 비빔밥의 고장",
    image: "https://images.unsplash.com/photo-1583469321168-f0be4b77e80e?w=800&q=80"
  },
]

export default function TravelPage() {
  const [destination, setDestination] = useState<typeof destinations[0] | null>(null)
  const [filter, setFilter] = useState<"all" | "domestic" | "international">("all")

  const pickDestination = () => {
    let filtered = destinations
    if (filter === "domestic") {
      filtered = destinations.filter(d => d.country === "국내")
    } else if (filter === "international") {
      filtered = destinations.filter(d => d.country === "해외")
    }
    
    const randomIndex = Math.floor(Math.random() * filtered.length)
    setDestination(filtered[randomIndex])
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <Plane className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 text-sky-500" />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            랜덤 여행지 추천
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            다음 여행지를 랜덤으로 선택해드려요
          </p>
        </div>

        <div className="flex gap-2 justify-center mb-6 md:mb-8">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            className={`text-sm md:text-base ${filter === "all" ? "bg-sky-500 hover:bg-sky-600" : ""}`}
          >
            전체
          </Button>
          <Button
            onClick={() => setFilter("domestic")}
            variant={filter === "domestic" ? "default" : "outline"}
            className={`text-sm md:text-base ${filter === "domestic" ? "bg-sky-500 hover:bg-sky-600" : ""}`}
          >
            국내만
          </Button>
          <Button
            onClick={() => setFilter("international")}
            variant={filter === "international" ? "default" : "outline"}
            className={`text-sm md:text-base ${filter === "international" ? "bg-sky-500 hover:bg-sky-600" : ""}`}
          >
            해외만
          </Button>
        </div>

        <Card className="mb-6 md:mb-8 overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50">
          {!destination ? (
            <div className="py-16 md:py-20">
              <p className="text-gray-400 text-base md:text-lg">
                아래 버튼을 눌러 여행지를 추천받아보세요
              </p>
            </div>
          ) : (
            <div>
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                  <span className="text-xs md:text-sm font-medium text-sky-600">{destination.country}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                  {destination.name}
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  {destination.description}
                </p>
              </div>
            </div>
          )}
        </Card>

        <Button
          onClick={pickDestination}
          size="lg"
          className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600"
        >
          <Plane className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          여행지 추천받기
        </Button>

        <div className="mt-8 md:mt-16 p-4 md:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-xs md:text-sm text-gray-600">
            💡 <strong>팁:</strong> 국내/해외 필터를 선택하고 추천받아보세요!
          </p>
        </div>
      </div>
    </div>
  )
}
