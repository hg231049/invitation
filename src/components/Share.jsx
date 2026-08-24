import React, { useState } from 'react';

const KAKAO_JAVASCRIPT_KEY = 'a8c4c11e39587dfb19e4622aa34558b4';

export default function Share() {
  const [copied, setCopied] = useState(false);

  // 링크 복사
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('링크 복사 실패:', error);
    }
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    if (!window.Kakao) {
      alert('카카오 SDK를 불러오지 못했습니다.');
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',

      content: {
        title: '초대합니다',
        description:
          '2026년 10월 24일 토요일 오후 1시\n아모리스 역삼 3층',

        imageUrl:
          'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',

        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },

      buttons: [
        {
          title: '모바일 초대장 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <div className="flex justify-center gap-3 py-8">

      {/* 링크 복사 */}
      <button
        type="button"
        onClick={handleCopy}
        className="
          flex
          items-center
          gap-2
          h-9
          px-4
          rounded-full
          border
          border-[#ddd]
          bg-white
          text-[#777]
          text-[11px]
          tracking-wide
          transition
          hover:border-brand-color
          hover:text-brand-color
          active:scale-95
        "
      >
        {/* 링크 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>

        <span>
          {copied ? '복사 완료' : '링크 복사'}
        </span>
      </button>


      {/* 카카오톡 공유 */}
      <button
        type="button"
        onClick={handleKakaoShare}
        className="
          flex
          items-center
          gap-2
          h-9
          px-4
          rounded-full
          border
          border-[#ddd]
          bg-white
          text-[#777]
          text-[11px]
          tracking-wide
          transition
          hover:border-brand-color
          hover:text-brand-color
          active:scale-95
        "
      >
        {/* 카카오톡 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.87 1.93 5.38 4.82 6.73-.21.77-.76 2.8-.87 3.24-.14.55.2.54.42.39.18-.12 2.9-1.97 4.16-2.77.48.07.97.11 1.47.11 5.52 0 10-3.58 10-8S17.52 3 12 3Z" />
        </svg>

        <span>카카오톡</span>
      </button>

    </div>
  );
}