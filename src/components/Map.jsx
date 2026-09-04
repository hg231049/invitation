import React, { useEffect, useRef } from 'react';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '아모리스 역삼';
  const LAT = 37.500627;
  const LNG = 127.036391;

  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao?.maps || !mapRef.current) return;

      window.kakao.maps.load(() => {
        const container = mapRef.current;

        const options = {
          center: new window.kakao.maps.LatLng(LAT, LNG),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition =
          new window.kakao.maps.LatLng(LAT, LNG);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    if (window.kakao?.maps) {
      loadMap();
      return;
    }

    const script = document.createElement('script');

    script.src =
      `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&autoload=false`;

    script.async = true;
    script.onload = loadMap;

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const openKakaoMap = () => {
    const url =
      `https://map.kakao.com/link/to/${encodeURIComponent(
        HALL_NAME
      )},${LAT},${LNG}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openNaverMap = () => {
    const url =
      `https://map.naver.com/p/directions/-/${LNG},${LAT},${encodeURIComponent(
        HALL_NAME
      )}/-/transit`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full px-5 pㅠ-[60px] bg-[#fffefe]">

      {/* 장소 정보 */}
      <div className="text-center mb-6">
        <h3 className="text-[16px] font-medium tracking-wide text-[#333]">
          아모리스 역삼
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#888]">
          서울 강남구 테헤란로 152
        </p>
      </div>


      {/* 지도 */}
      <div className="overflow-hidden border border-[#eee]">
        <div
          ref={mapRef}
          className="w-full h-[260px]"
        />
      </div>


      {/* 교통 안내 */}
      <div className="mt-5 border-t border-b border-[#eee] py-5">
        <div className="flex gap-3">
          <span className="text-[#b53720] text-sm">
            🚇
          </span>

          <div>
            <p className="text-[13px] font-medium text-[#444]">
              지하철 이용 시
            </p>

            <p className="mt-1 text-[12px] leading-5 text-[#999]">
              2호선 역삼역 3번 출구에서 도보 약 5분
            </p>
          </div>
        </div>
      </div>


      {/* 길찾기 */}
      <div className="grid grid-cols-2 gap-2.5 mt-5">

        <button
          type="button"
          onClick={openKakaoMap}
          className="
            h-11
            border
            border-[#e8d9d5]
            bg-[#fff]
            text-[#5b3a34]
            text-[12px]
            tracking-wide
            transition
            hover:bg-[#faf5f3]
            active:scale-[0.98]
          "
        >
          카카오맵 길찾기
        </button>

        <button
          type="button"
          onClick={openNaverMap}
          className="
            h-11
            border
            border-[#e8d9d5]
            bg-[#fff]
            text-[#5b3a34]
            text-[12px]
            tracking-wide
            transition
            hover:bg-[#faf5f3]
            active:scale-[0.98]
          "
        >
          네이버지도 길찾기
        </button>

      </div>

    </div>
  );
}