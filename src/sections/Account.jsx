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

    const [toastMessage,setToastMessage] = useState('');

    // 클립보드 복사 
    const handleCopy = (bank,number) => {
      const textCopy = `${bank} ${number}`;
      navigator.clipboard.writeText(textCopy).then(() => {
        showToast('계좌번호가 복사되었습니다.');
      }).catch(() => {
        showToast('복사에 실패하였습니다. 직접 복사해주세요.');
      });
    };

    // 토스트 메세지 띄우기
    const showToast = (msg) => {
      setToastMessage(msg);
      setTimeout(()=>setToastMessage(''),2000);
    }

    return (
        <section className="section">
            <div className="inner">
              <SectionTitle
                subTitle="Account"
                title="마음 전하실 곳"
              />

              {ACCOUNT_DATA.map((family, idx) => (
                <div
                  key={idx}
                  className="mb-6 p-5 rounded-[20px] border border-[#DDE5D8] bg-[#FAFBF7]"
                >
                  <h4 className="mb-4 text-[15px] font-semibold text-[#435747]">
                    {family.group}
                  </h4>

                  {family.accounts.map((acc, aIdx) => (
                    <div
                      key={aIdx}
                      className={`py-4 ${
                        aIdx < family.accounts.length - 1
                          ? 'border-b border-dashed border-[#E1E6DE]'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">

                        <div className="info">
                          <span className="mr-[6px] text-[12px] text-[#899689]">
                            [{acc.role}]
                          </span>

                          <strong className="text-[14px] text-[#435747]">
                            {acc.name}
                          </strong>

                          <div className="mt-1 text-[13px] text-[#697568]">
                            {acc.bank} {acc.number}
                          </div>
                        </div>

                        <button
                          onClick={() => handleCopy(acc.bank, acc.number)}
                          className="
                            shrink-0
                            px-3 py-1.5
                            rounded-full
                            border border-[#C9D5C3]
                            bg-[#EEF3EA]
                            text-[11px]
                            text-[#526450]
                            cursor-pointer
                          "
                        >
                          복사
                        </button>

                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {toastMessage && (
                <div
                  className="
                    fixed
                    bottom-[30px]
                    left-1/2
                    -translate-x-1/2
                    z-[100]
                    px-5 py-2.5
                    rounded-full
                    bg-[#435747]
                    text-[12px]
                    text-white
                    shadow-lg
                  "
                >
                  {toastMessage}
                </div>
              )}
            </div>
          </section>
    )
}

export default Account;