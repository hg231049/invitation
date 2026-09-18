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

  // 어떤 계좌 그룹이 열려있는지
  const [openIndex, setOpenIndex] = useState(null);

  // 토글
  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

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

    setTimeout(() => {
      setToastMessage('');
    }, 2000);
  };

  return (
    <section className="bg-[#FBF7F1]">
      <div className="inner">

        <SectionTitle
          subTitle="Account"
          title="마음 전하실 곳"
        />

        <div className="flex flex-col gap-3">

          {ACCOUNT_DATA.map((family, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#E5D6CC]
                  bg-[#fff]
                "
              >

                {/* 토글 버튼 */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-0
                    bg-transparent
                    px-5
                    py-4
                    text-left
                    cursor-pointer
                  "
                >
                  <span className="
                    text-[14px]
                    font-medium
                    text-[#A96F5D]
                  ">
                    {family.group}
                  </span>

                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      text-[18px]
                      font-light
                      text-[#A18D82]
                      transition-transform
                      duration-300
                      ${isOpen ? 'rotate-45' : ''}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* 계좌 내용 */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div className="
                      border-t
                      border-[#E8DAD2]
                      px-5
                    ">

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
                          <div className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          ">

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
                              onClick={() =>
                                handleCopy(acc.bank, acc.number)
                              }
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

                  </div>
                </div>

              </div>
            );
          })}

        </div>

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