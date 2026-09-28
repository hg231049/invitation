import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import "../css/account.css";

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

  const [openIndexes, setOpenIndexes] = useState(
    ACCOUNT_DATA.map((_, idx) => idx)
  );

  // 토글
  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((index) => index !== idx)
        : [...prev, idx]
    );
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

  // 토스트 메시지
  const showToast = (msg) => {
    setToastMessage(msg);

    setTimeout(() => {
      setToastMessage('');
    }, 2000);
  };

  return (
    <section className="account-section">
      <div className="inner">

        <SectionTitle
          subTitle="Account"
          title="마음 전하실 곳"
        />

        <div className="account-list">

          {ACCOUNT_DATA.map((family, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div
                key={idx}
                className="account-group"
              >

                {/* 토글 버튼 */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="account-toggle"
                >
                  <span className="account-group-title">
                    {family.group}
                  </span>

                  <span
                    className={`account-toggle-icon ${
                      isOpen ? 'is-open' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* 계좌 내용 */}
                <div
                  className={`account-content ${
                    isOpen ? 'is-open' : ''
                  }`}
                >
                  <div className="account-content-inner">

                    <div className="account-items">

                      {family.accounts.map((acc, aIdx) => (
                        <div
                          key={aIdx}
                          className="account-item"
                        >

                          <div className="account-info">

                            <div className="account-name">
                              <span className="account-role">
                                [{acc.role}]
                              </span>

                              <strong>
                                {acc.name}
                              </strong>
                            </div>

                            <div className="account-number">
                              {acc.bank} {acc.number}
                            </div>

                          </div>

                          {/* 복사 버튼 */}
                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(acc.bank, acc.number)
                            }
                            className="account-copy"
                          >
                            복사
                          </button>

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
          <div className="account-toast">
            {toastMessage}
          </div>
        )}

      </div>
    </section>
  );
};

export default Account;