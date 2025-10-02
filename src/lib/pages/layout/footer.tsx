"use client"

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 쿠팡 파트너스 배너 영역 */}
        <div className="mb-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg border-2 border-blue-200 p-4 md:p-6 text-center overflow-hidden">
            <p className="text-xs md:text-sm text-gray-500 mb-4">
              🎁 파트너스 활동으로 일정액의 수수료를 제공받을 수 있습니다
            </p>
            <div 
              className="flex justify-center items-center"
              dangerouslySetInnerHTML={{
                __html: `
                  <script src="https://ads-partners.coupang.com/g.js"></script>
                  <script>
                    new PartnersCoupang.G({"id":928471,"template":"carousel","trackingCode":"AF8730588","width":"680","height":"140","tsource":""});
                  </script>
                `
              }}
            />
            <p className="text-xs text-gray-400 mt-4">
              &quot;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&quot;
            </p>
          </div>
        </div>

        {/* 사이트 정보 */}
        <div className="text-center text-sm text-gray-600">
          <p>© 2025 랜덤 생성기. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
