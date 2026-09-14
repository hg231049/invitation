import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const ACCOUNT_DATA = [
  {
    group: '**측 계좌',
    accounts: [
      { role: '**', bank: '신한', number: '110-123-456789', name: '홍길동' },
      { role: '혼주(부)', bank: '국민', number: '123456-04-123456', name: '홍판서' },
      { role: '혼주(모)', bank: '국민', number: '123456-04-123456', name: '홍판서' },
    ],
  },
  {
    group: '**측 계좌',
    accounts: [
      { role: '**', bank: '카카오뱅크', number: '3333-01-1234567', name: '성춘향' },
      { role: '혼주(부)', bank: '국민', number: '123456-04-123456', name: '김판서' },
      { role: '혼주(모)', bank: '우리', number: '1002-123-456789', name: '월매' },
    ],
  },
];

const Account = () => {
  const [toastMessage, setToastMessage] = useState('');

  // 클립보드 복사
  const handleCopy = (bank, number) => {
    const textCopy = `${bank} ${number}`;

    navigator.clipboard
      .writeText(textCopy)
      .then(() => {
        showToast('계좌번호가 복사되었습니다.');
      })
      .catch(() => {
        showToast('복사에 실패하였습니다. 직접 복사해주세요.');
      });
  };

  // 토스트 메세지
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <section className="bg-[#FBF7F1]">
      <div className="inner">

        <SectionTitle
          subTitle="Account"
          title="마음 전하실 곳"
        />

        {ACCOUNT_DATA.map((family, idx) => (
          <div
            key={idx}
            className="
              mb-6
              rounded-[4px]
              border
              border-[#E5D6CC]
              
              p-5
            "
          >
            {/* 가족 구분 */}
            <h4 className="
              mb-4
              text-[15px]
              font-medium
              text-[#A96F5D]
            ">
              {family.group}
            </h4>

            {family.accounts.map((acc, aIdx) => (
              <div
                key={aIdx}
                className={`
                  py-4
                  ${
                    aIdx < family.accounts.length - 1
                      ? 'border-b border-dashed border-[#E8DAD2]'
                      : ''
                  }
                `}
              >
                <div className="flex items-center justify-between gap-3">

                  {/* 계좌 정보 */}
                  <div className="info">

                    <div className="flex items-center">
                      <span className="
                        mr-[6px]
                        text-[12px]
                        text-[#A18D82]
                      ">
                        [{acc.role}]
                      </span>

                      <strong className="
                        text-[14px]
                        font-medium
                        text-[#75655D]
                      ">
                        {acc.name}
                      </strong>
                    </div>

                    <div className="
                      mt-1
                      text-[13px]
                      text-[#8E776D]
                    ">
                      {acc.bank} {acc.number}
                    </div>

                  </div>

                  {/* 복사 버튼 */}
                  <button
                    type="button"
                    onClick={() => handleCopy(acc.bank, acc.number)}
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-[#D9B6A7]
                      bg-[#F7EDE5]
                      px-3
                      py-1.5
                      text-[11px]
                      text-[#A96F5D]
                      cursor-pointer
                      transition
                      hover:bg-[#F1E1D8]
                      active:scale-95
                    "
                  >
                    복사
                  </button>

                </div>
              </div>
            ))}
          </div>
        ))}

        {/* TOAST */}
        {toastMessage && (
          <div
            className="
              fixed
              bottom-[30px]
              left-1/2
              z-[100]
              -translate-x-1/2
              rounded-full
              bg-[#6F5147]
              px-5
              py-2.5
              text-[12px]
              text-[#FFF9F4]
              shadow-lg
            "
          >
            {toastMessage}
          </div>
        )}

      </div>
    </section>
  );
};

export default Account;