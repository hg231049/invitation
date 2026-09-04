import React, { useEffect, useRef } from 'react';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '로프트가든344';
  const ADDRESS = '서울 양천구 오목로 344';

  useEffect(() => {
    const loadMap = () => {
      if (!window.kakao?.maps || !mapRef.current) return;

      window.kakao.maps.load(() => {
        const container = mapRef.current;

        // 주소 → 위도/경도 변환
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(ADDRESS, (result, status) => {
          if (
            status !== window.kakao.maps.services.Status.OK ||
            !result.length
          ) {
            console.error('주소를 좌표로 변환하지 못했습니다.');
            return;
          }

          const LAT = Number(result[0].y);
          const LNG = Number(result[0].x);

          const position =
            new window.kakao.maps.LatLng(LAT, LNG);

          const options = {
            center: position,
            level: 3,
          };

          const map =
            new window.kakao.maps.Map(
              container,
              options
            );

          const marker =
            new window.kakao.maps.Marker({
              position,
            });

          marker.setMap(map);
        });
      });
    };

    if (window.kakao?.maps) {
      loadMap();
      return;
    }

    const script = document.createElement('script');

    script.src =
      `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a8c4c11e39587dfb19e4622aa34558b4&autoload=false&libraries=services`;

    script.async = true;
    script.onload = loadMap;

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  // 카카오맵 길찾기
  const openKakaoMap = () => {
    const url =
      `https://map.kakao.com/link/search/${encodeURIComponent(
        HALL_NAME
      )}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // 네이버 지도 길찾기
  const openNaverMap = () => {
    const url =
      `https://map.naver.com/p/search/${encodeURIComponent(
        HALL_NAME
      )}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="w-full px-5 py-[60px] bg-[#fffefe]">

      {/* 장소 정보 */}
      <div className="text-center mb-6">
        <h3 className="text-[16px] font-medium tracking-wide text-[#435747]">
          로프트가든344
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#888]">
          서울 양천구 오목로 344 청학빌딩 8-10층
        </p>
      </div>


      {/* 지도 */}
      <div className="overflow-hidden border border-[#DDE5D8] rounded-[16px]">
        <div
          ref={mapRef}
          className="w-full h-[260px]"
        />
      </div>


      {/* 교통 안내 */}
      <div className="mt-5 border-t border-b border-[#DDE5D8] py-5">
        <div className="flex gap-3">
          <span className="text-sm">
            🚇
          </span>

          <div>
            <p className="text-[13px] font-medium text-[#435747]">
              지하철 이용 시
            </p>

            <p className="mt-1 text-[12px] leading-5 text-[#899689]">
              5호선 오목교역 7번 출구에서 도보 약 1분
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
            border-[#C9D5C3]
            rounded-[8px]
            bg-[#EEF3EA]
            text-[#435747]
            text-[12px]
            tracking-wide
            transition
            hover:bg-[#E3EBDD]
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
            border-[#C9D5C3]
            rounded-[8px]
            bg-[#EEF3EA]
            text-[#435747]
            text-[12px]
            tracking-wide
            transition
            hover:bg-[#E3EBDD]
            active:scale-[0.98]
          "
        >
          네이버지도 길찾기
        </button>

      </div>

    </div>
  );
}