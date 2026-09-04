import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import SectionTitle from "../components/SectionTitle";
// Supabase 클라이언트 설정 (본인 Project URL과 Anon Key 입력)
const supabase = createClient('https://godyxtxgjwhnbaasipja.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZHl4dHhnandobmJhYXNpcGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTE3NzksImV4cCI6MjEwMjc2Nzc3OX0.JxssPnby6iOEYXvhyqw2qZsw41Gnm0BPASBCq_sn4Xs');

const Guestbook = () => {
    
    const [messages,setMessages] = useState([]);
    const [form,setForm] = useState({name:'',password:'',message:''});
    const [loading, setLoading] = useState(false);

    // 1. 방명록 목록 불러오기
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

    // 2. 방명록 작성 제출
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!form.name.trim() || !form.message.trim() || !form.password.trim()){
            alert('이름,비밀번호,메세지를 모두 입력해주세요.');
            return;
        }

        setLoading(true);

        const { error } = await supabase.from('guestbook').insert([
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
            setForm({ name: '', password: '', message: '' });
            fetchGuestbook(); // 목록 갱신
        }
    }
    // 3. 방명록 삭제
    const handleDelete = async (id, originalPassword) => {
        const inputPassword = prompt('글 작성 시 입력한 비밀번호를 입력해주세요.');
        if (!inputPassword) return;

        if (inputPassword === originalPassword) {
        const { error } = await supabase.from('guestbook').delete().eq('id', id);
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
        <section className="section">
            <div className="inner">
                <SectionTitle
                subTitle="Guestbook"
                title="축하 방명록"
                />

                <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
                >
                <div className="
                    flex gap-2 w-full
                    [&_input]:w-full
                    [&_input]:flex-1
                    [&_input]:p-3
                    [&_input]:border
                    [&_input]:border-solid
                    [&_input]:border-[#DDE5D8]
                    [&_input]:rounded-[8px]
                    [&_input]:bg-[#FAFBF7]
                    [&_input]:outline-none
                ">
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
                    border-[#DDE5D8]
                    rounded-[8px]
                    bg-[#FAFBF7]
                    outline-none
                    resize-none
                    "
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="
                    p-3
                    rounded-[8px]
                    border-0
                    bg-[#435747]
                    text-white
                    text-[13px]
                    cursor-pointer
                    "
                >
                    {loading ? '등록 중...' : '축하글 남기기'}
                </button>
                </form>

                <div className="flex flex-col gap-3 mt-6">
                {messages.map((item) => (
                    <div
                    key={item.id}
                    className="
                        relative
                        p-4
                        rounded-[16px]
                        bg-[#FAFBF7]
                        border
                        border-[#E2E8DE]
                    "
                    >
                    <div className="flex justify-between mb-2">
                        <strong className="text-[14px] text-[#435747]">
                        {item.name}
                        </strong>

                        <button
                        onClick={() =>
                            handleDelete(item.id, item.password)
                        }
                        className="
                            text-[#9AA49A]
                            text-[11px]
                            border-0
                            bg-transparent
                            cursor-pointer
                        "
                        >
                        삭제
                        </button>
                    </div>

                    <p className="
                        m-0
                        text-[13px]
                        leading-[1.7]
                        text-[#596359]
                        whitespace-pre-wrap
                    ">
                        {item.message}
                    </p>

                    <span className="
                        block
                        mt-2
                        text-[10px]
                        text-[#A2AAA1]
                    ">
                        {new Date(item.created_at).toLocaleDateString()}
                    </span>
                    </div>
                ))}
                </div>

            </div>
            </section>
    )
}

export default Guestbook;