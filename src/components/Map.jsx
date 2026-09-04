import React, { useEffect, useRef } from 'react';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '로프트가든344';

  useEffect(() => {
    if (!window.kakao?.maps) {
      console.error('카카오맵 SDK가 로드되지 않았습니다.');
      return;
    }

    window.kakao.maps.load(() => {
      // services 없이 지도만 생성
      // 임시 좌표: 오목교역/로프트가든344 주변
      const position = new window.kakao.maps.LatLng(
        37.5245,
        126.8750
      );

      const map = new window.kakao.maps.Map(
        mapRef.current,
        {
          center: position,
          level: 4,
        }
      );

      const marker = new window.kakao.maps.Marker({
        position,
      });

      marker.setMap(map);
    });
  }, []);

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
    <section className="w-full bg-[#fffefe] px-5 py-[60px]">

      <div className="mb-6 text-center">
        <h3 className="text-[16px] font-medium tracking-wide text-[#435747]">
          로프트가든344
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#888]">
          서울 양천구 오목로 344 청학빌딩 8-10층
        </p>
      </div>

      <div className="overflow-hidden rounded-[16px] border border-[#DDE5D8]">
        <div
          ref={mapRef}
          className="h-[260px] w-full"
        />
      </div>

      <div className="mt-5 border-t border-b border-[#DDE5D8] py-5">
        <div className="flex gap-3">
          <span className="text-sm">🚇</span>

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

      <div className="mt-5 grid grid-cols-2 gap-2.5">

        <button
          type="button"
          onClick={openKakaoMap}
          className="h-11 rounded-[8px] border border-[#C9D5C3] bg-[#EEF3EA] text-[12px] tracking-wide text-[#435747] hover:bg-[#E3EBDD]"
        >
          카카오맵 길찾기
        </button>

        <button
          type="button"
          onClick={openNaverMap}
          className="h-11 rounded-[8px] border border-[#C9D5C3] bg-[#EEF3EA] text-[12px] tracking-wide text-[#435747] hover:bg-[#E3EBDD]"
        >
          네이버지도 길찾기
        </button>

      </div>

    </section>
  );
}