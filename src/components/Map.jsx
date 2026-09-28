import React, { useEffect, useRef } from 'react';
import '../css/map.css';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '월드컵컨벤션';

  const ADDRESS =
    '서울특별시 마포구 월드컵로 240 2층  (성산동, 서울월드컵경기장 서측)';

  useEffect(() => {
    if (!window.kakao?.maps) {
      console.error('카카오맵 SDK가 로드되지 않았습니다.');
      return;
    }

    window.kakao.maps.load(() => {
      const position = new window.kakao.maps.LatLng(
        37.5684823,
        126.896308
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
    <section className="kakao-map-section">

      {/* TITLE */}
      <div className="kakao-map-title">
        <h3>월드컵컨벤션</h3>

        <p>
          {ADDRESS}
        </p>
      </div>

      {/* MAP */}
      <div className="kakao-map-wrapper">
        <div
          ref={mapRef}
          className="kakao-map"
        />
      </div>

      {/* SUBWAY */}
      <div className="transport-info transport-subway">
        <div className="transport-content">

          <span className="transport-icon">
            🚇
          </span>

          <div>
            <p className="transport-title">
              지하철 이용 시
            </p>

            <p className="transport-description">
              6호선 월드컵경기장역 2번 출구에서
              <br />
              도보 약 5분
            </p>
          </div>

        </div>
      </div>

      {/* PARKING */}
      <div className="transport-info transport-parking">
        <div className="transport-content">

          <span className="transport-icon">
            🚗
          </span>

          <div>
            <p className="transport-title">
              주차
            </p>

            <p className="transport-description">
              서울월드컵경기장 주차장 이용
            </p>
          </div>

        </div>
      </div>

      {/* MAP BUTTONS */}
      <div className="map-buttons">

        <button
          type="button"
          onClick={openKakaoMap}
          className="map-button"
        >
          카카오맵 길찾기
        </button>

        <button
          type="button"
          onClick={openNaverMap}
          className="map-button"
        >
          네이버지도 길찾기
        </button>

      </div>

    </section>
  );
}