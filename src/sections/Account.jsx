import { useState } from "react";

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
        <section>
            <div className="inner">
                <div className="">
                  <h3 className="relative mb-10 font-bold text-center">마음 전하실 곳</h3>
                  {ACCOUNT_DATA.map((family,idx)=>(
                    <div key={idx} className="mb-6 p-4 border border-solid border-[#eee] rounded-[12px]">
                        <h4>{family.group}</h4>
                        {family.accounts.map((acc,aIdx) => (
                          <div key={aIdx} style={{ padding: '8px 0', borderBottom: aIdx < family.accounts.length - 1 ? '1px dashed #eee' : 'none' }}>
                            <div className="flex justify-between align-middle">
                                <div className="info">
                                    <span className="mr-[6px] text-[#888] text-[0.85rem]">[{acc.role}]</span>
                                    <strong className="">{acc.name}</strong>
                                    <div className="mt-1 text-[#444] text-[0.9rem]">
                                      {acc.bank} {acc.number}
                                    </div>
                                </div>
                                <button 
                                  onClick={() => handleCopy(acc.bank, acc.number)}
                                  className="p-[3px_12px] rounded-[6px] border-0 bg-[#f0f0f0] cursor-pointer">
                                  복사
                                </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}

                  {/* 복사 알림 토스트 팝업 */}
                  {toastMessage && (
                      <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 p-[10px_20px] text-[0.85rem] text-white rounded-[20px] bg-[rgba(0,0,0,0.7)] ">
                        {toastMessage}
                      </div>
                  )}

                </div>
            </div>
        </section>
    )
}

export default Account;