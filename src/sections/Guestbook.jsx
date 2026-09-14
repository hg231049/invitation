import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import SectionTitle from "../components/SectionTitle";

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

  return (
    <section className="section bg-[#FBF7F1]">
      <div className="inner">

        <SectionTitle
          subTitle="Guestbook"
          title="축하 방명록"
        />

        {/* 작성 FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >

          {/* 이름 / 비밀번호 */}
          <div
            className="
              flex
              w-full
              gap-2

              [&_input]:w-full
              [&_input]:flex-1
              [&_input]:p-3
              [&_input]:border
              [&_input]:border-solid
              [&_input]:border-[#E5D6CC]
              [&_input]:rounded-[4px]
              [&_input]:bg-[#FFFCF8]
              [&_input]:text-[#75655D]
              [&_input]:text-[13px]
              [&_input]:outline-none
              [&_input]:placeholder:text-[#B5A59D]

              [&_input:focus]:border-[#C99582]
            "
          >
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
            className="
              p-3
              border
              border-solid
              border-[#E5D6CC]
              rounded-[4px]
              bg-[#FFFCF8]
              text-[13px]
              text-[#75655D]
              placeholder:text-[#B5A59D]
              outline-none
              resize-none
              focus:border-[#C99582]
            "
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              p-3
              rounded-[4px]
              border
              border-[#C99582]
              bg-[#C99582]
              text-[#FFFDFC]
              text-[13px]
              cursor-pointer
              transition
              hover:bg-[#B98573]
              active:scale-[.99]
              disabled:cursor-default
              disabled:opacity-60
            "
          >
            {loading ? '등록 중...' : '축하글 남기기'}
          </button>

        </form>

        {/* GUESTBOOK LIST */}
        <div className="flex flex-col gap-3 mt-7">

          {messages.map((item) => (
            <div
              key={item.id}
              className="
                relative
                p-4
                rounded-[4px]
                bg-[#FFFCF8]
                border
                border-[#E5D6CC]
              "
            >

              {/* NAME / DELETE */}
              <div className="flex justify-between mb-2">

                <strong className="
                  text-[14px]
                  font-medium
                  text-[#75655D]
                ">
                  {item.name}
                </strong>

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(item.id, item.password)
                  }
                  className="
                    text-[#A18D82]
                    text-[11px]
                    border-0
                    bg-transparent
                    cursor-pointer
                    hover:text-[#C99582]
                  "
                >
                  삭제
                </button>

              </div>

              {/* MESSAGE */}
              <p className="
                m-0
                text-[13px]
                leading-[1.7]
                text-[#75655D]
                whitespace-pre-wrap
              ">
                {item.message}
              </p>

              {/* DATE */}
              <span className="
                block
                mt-2
                text-[10px]
                text-[#A18D82]
              ">
                {new Date(item.created_at).toLocaleDateString()}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Guestbook;