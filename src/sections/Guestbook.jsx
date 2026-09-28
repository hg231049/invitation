import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import SectionTitle from "../components/SectionTitle";
import '../css/guest.css';

const supabase = createClient(
  'https://godyxtxgjwhnbaasipja.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmxlIiwicmVmIjoiZ29keXh0eGdqd2huYmFhc2lwamEiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc4NzE5MTc3OSwiZXhwIjoyMTAyNzY3Nzc5fQ.JxssPnby6iOEYXvhyqw2qZsw41Gnm0BPASBCq_sn4Xs'
);

const Guestbook = () => {
  const [messages, setMessages] = useState([]);

  const [form, setForm] = useState({
    name: '',
    password: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // 방명록 목록 불러오기
  const fetchGuestbook = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
  };

  useEffect(() => {
    fetchGuestbook();
  }, []);

  // 방명록 작성
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.message.trim() ||
      !form.password.trim()
    ) {
      alert('이름, 비밀번호, 메시지를 모두 입력해주세요.');
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('guestbook')
      .insert([
        {
          name: form.name,
          password: form.password,
          message: form.message,
        },
      ]);

    setLoading(false);

    if (error) {
      alert('방명록 등록에 실패했습니다.');
    } else {
      setForm({
        name: '',
        password: '',
        message: ''
      });

      fetchGuestbook();
      setVisibleCount(3);
    }
  };

  // 방명록 삭제
  const handleDelete = async (id, originalPassword) => {
    const inputPassword = prompt(
      '글 작성 시 입력한 비밀번호를 입력해주세요.'
    );

    if (!inputPassword) return;

    if (inputPassword === originalPassword) {
      const { error } = await supabase
        .from('guestbook')
        .delete()
        .eq('id', id);

      if (!error) {
        alert('삭제되었습니다.');
        fetchGuestbook();
      } else {
        alert('삭제 처리 중 오류가 발생했습니다.');
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  // 더보기
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleMessages = messages.slice(0, visibleCount);

  return (
    <section className="section guestbook-section">
      <div className="inner">

        <SectionTitle
          subTitle="Guestbook"
          title="축하 방명록"
        />

        {/* 작성 FORM */}
        <form
          onSubmit={handleSubmit}
          className="guestbook-form"
        >

          {/* 이름 / 비밀번호 */}
          <div className="guestbook-input-row">
            <input
              type="text"
              placeholder="성함"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <input
              type="password"
              placeholder="비밀번호(4자리)"
              maxLength={4}
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />
          </div>

          {/* MESSAGE */}
          <textarea
            placeholder="축하의 한마디를 남겨주세요"
            rows={3}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value
              })
            }
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="guestbook-submit"
          >
            {loading ? '등록 중...' : '축하글 남기기'}
          </button>

        </form>

        {/* GUESTBOOK LIST */}
        <div className="guestbook-list">

          {visibleMessages.map((item) => (
            <div
              key={item.id}
              className="guestbook-item"
            >

              {/* NAME / DELETE */}
              <div className="guestbook-item-header">

                <strong>
                  {item.name}
                </strong>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(item.id, item.password)
                  }
                >
                  삭제
                </button>

              </div>

              {/* MESSAGE */}
              <p className="guestbook-message">
                {item.message}
              </p>

              {/* DATE */}
              <span className="guestbook-date">
                {new Date(item.created_at).toLocaleDateString()}
              </span>

            </div>
          ))}

        </div>

        {/* 더보기 버튼 */}
        {visibleCount < messages.length && (
          <button
            type="button"
            onClick={handleLoadMore}
            className="guestbook-more"
          >
            <span>더보기</span>

            <span className="guestbook-more-count">
              {Math.min(visibleCount + 3, messages.length)}
              /
              {messages.length}
            </span>
          </button>
        )}

      </div>
    </section>
  );
};

export default Guestbook;