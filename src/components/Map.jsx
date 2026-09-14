import React, { useEffect, useRef } from 'react';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '월드컵컨벤션';
  const ADDRESS =
    '서울 마포구 월드컵로 240 2층 (성산동, 서울월드컵경기장 서측)';

  useEffect(() => {
    if (!window.kakao?.maps) {
      console.error('카카오맵 SDK가 로드되지 않았습니다.');
      return;
    }

    window.kakao.maps.load(() => {
      const position = new window.kakao.maps.LatLng(
        37.56826,
        126.89724
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

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openNaverMap = () => {
    const url =
      `https://map.naver.com/p/search/${encodeURIComponent(
        HALL_NAME
      )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full  px-5 py-[60px]">

      {/* TITLE */}
      <div className="mb-6 text-center">

        <h3 className="text-[16px] font-medium tracking-wide text-[#75655D]">
          서울월드컵경기장
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#A18D82]">
          {ADDRESS}
        </p>
      </div>

      {/* MAP */}
      <div className="overflow-hidden rounded-[4px] border border-[#E5D6CC]">
        <div
          ref={mapRef}
          className="h-[260px] w-full"
        />
      </div>

      {/* SUBWAY */}
      <div className="mt-5 border-t border-b border-[#E5D6CC] py-5">
        <div className="flex gap-3">
          <span className="text-sm">🚇</span>

          <div>
            <p className="text-[13px] font-medium text-[#A96F5D]">
              지하철 이용 시
            </p>

            <p className="mt-1 text-[12px] leading-5 text-[#75655D]">
              6호선 월드컵경기장역 2번 출구에서
              <br />
              도보 약 5분
            </p>
          </div>
        </div>
      </div>

      {/* PARKING */}
      <div className="border-b border-[#E5D6CC] py-5">
        <div className="flex gap-3">
          <span className="text-sm">🚗</span>

          <div>
            <p className="text-[13px] font-medium text-[#A96F5D]">
              주차
            </p>

            <p className="mt-1 text-[12px] leading-5 text-[#75655D]">
              서울월드컵경기장 주차장 이용
            </p>
          </div>
        </div>
      </div>

      {/* MAP BUTTONS */}
      <div className="mt-5 grid grid-cols-2 gap-2.5">

        <button
          type="button"
          onClick={openKakaoMap}
          className="
            h-11
            rounded-[4px]
            border
            border-[#D9B6A7]
            bg-[#F7EDE5]
            text-[12px]
            tracking-wide
            text-[#75655D]
            transition
            hover:bg-[#F1E1D8]
            active:scale-[.98]
          "
        >
          카카오맵 길찾기
        </button>

        <button
          type="button"
          onClick={openNaverMap}
          className="
            h-11
            rounded-[4px]
            border
            border-[#D9B6A7]
            bg-[#F7EDE5]
            text-[12px]
            tracking-wide
            text-[#75655D]
            transition
            hover:bg-[#F1E1D8]
            active:scale-[.98]
          "
        >
          네이버지도 길찾기
        </button>

      </div>

    </section>
  );
}