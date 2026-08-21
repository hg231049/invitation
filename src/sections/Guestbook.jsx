import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 설정 (본인 Project URL과 Anon Key 입력)
const supabase = createClient('https://godyxtxgjwhnbaasipja.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZHl4dHhnandobmJhYXNpcGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTE3NzksImV4cCI6MjEwMjc2Nzc3OX0.JxssPnby6iOEYXvhyqw2qZsw41Gnm0BPASBCq_sn4Xs');

const Guestbook = () => {
    
    const [messages,setMessages] = useState([]);
    const [form,setForm] = useState({name:'',password:'',messages:''});
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
        
    }

    return (
        <section>
            <div className="inner">
               <div className="">
                    <h3 className='relative mb-10 font-bold text-center'>축하 방명록</h3>
                    {/* 방명록 작성 폼 */}
                    <form className='flex flex-col gap-2'>
                        <div className='flex gap-2 w-full [&_input]:w-full [&_input]:flex-1 [&_input]:p-2 [&_input]:border [&_input]:border-solid [&_input]:border-[#eee] [&_input]:rounded-[5px]'>
                            <input 
                                type="text"
                                placeholder='성함' 
                            />
                            <input 
                                type="password" 
                                placeholder='비밀번호(4자리)'
                            />
                        </div>
                        <textarea placeholder='축하의 한마디를 남겨주세요' className='p-2 border border-solid border-[#eee] rounded-[5px]'/>
                        <button className='p-2 text-white bg-[var(--color-brand-color)] rounded-[5px]'>축하글 남기기</button>
                    </form>
               </div>
            </div>
        </section>
    )
}

export default Guestbook;