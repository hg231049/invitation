import React, { useEffect, useRef } from 'react';
import '../css/map.css';

export default function KakaoMap() {
  const mapRef = useRef(null);

  const HALL_NAME = '월드컵컨벤션';

  const ADDRESS =
    '서울특별시 마포구 월드컵로 240 2층  (성산동, 서울월드컵경기장 서측 2층)';

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
              지하철 
            </p>

            <p className="transport-description">
             <em>6호선 월드컵경기장역 2번 출구 도보 3분.200M</em><br />
              환승역 | 2호선(합정), 3호선(약수/연신내), 4호선(삼각지),<br/>5호선 공덕, 경의중앙선(미지털미디어시티)
            </p>
          </div>

        </div>
      </div>
      {/* BUS */}
      <div className="transport-info transport-parking">
        <div className="transport-content">

          <span className="transport-icon">
            🚌
          </span>

          <div>
            <p className="transport-title">
              버스
            </p>

            <p className="transport-description">
              <em>월드컵경기장 서측. 문화비축기지 정류장</em><br />
              간선 | 571,710,760 <br />
              지선 | 7019,7715,8777 <br />
              광역 | 9711
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
              자동차
            </p>

            <p className="transport-description">
              <em>네비게이션 검색 시 '월드컵컨벤션' 입력</em><br />
              - 월드컵경기장 서문 진입 후 서측 1,2 주차장 이용 <br />
              - 주차 접수대 등록 후 출차(경기장 내 주차장 90분 무료) <br />
              - 홈플러스 주차장은 무료 주차 불가
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