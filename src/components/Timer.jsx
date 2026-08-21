import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Timer = ({INVITATION_TIME}) => {
    
    const [timeLeft,setTimeLeft] = useState({ days:0, hours:0, minutes:0, seconds:0 });

    // D-Day 실시간 카운트다운 (dayjs 활용)
    useEffect(()=>{
        const timer = setInterval(()=>{
            const now = dayjs();
            const target = dayjs(INVITATION_TIME);
            const diffSec = target.diff(now,'second');

            if(diffSec > 0){
                setTimeLeft({
                    days:Math.floor(diffSec / (3600 * 24)),
                    hours: Math.floor((diffSec % (3600 * 24)) / 3600),
                    minutes: Math.floor((diffSec % 3600) / 60),
                    seconds: diffSec % 60,
                })
            }  
        },1000);
        return () => clearInterval(timer);
    },[])

    return (
        <div>
           <div className="dday-box">
                <div className="time-unit"><span>{timeLeft.days}</span><p>DAYS</p></div>
                <div className="time-unit"><span>{timeLeft.hours}</span><p>HOURS</p></div>
                <div className="time-unit"><span>{timeLeft.minutes}</span><p>MIN</p></div>
                <div className="time-unit"><span>{timeLeft.seconds}</span><p>SEC</p></div>
            </div>

            <p className="dday-text">
                <b>{timeLeft.days}일</b> 남았습니다.
            </p>
        </div>
    )
}

export default Timer;