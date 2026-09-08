
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Timer = ({ INVITATION_TIME }) => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    const updateTimer = () => {

        const now = dayjs();
        const target = dayjs(INVITATION_TIME);

        const diffSec = target.diff(now, 'second');


        if (diffSec > 0) {

            setTimeLeft({
                days: Math.floor(
                    diffSec / (3600 * 24)
                ),

                hours: Math.floor(
                    (diffSec % (3600 * 24)) / 3600
                ),

                minutes: Math.floor(
                    (diffSec % 3600) / 60
                ),

                seconds: diffSec % 60,
            });

        } else {

            setTimeLeft({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });

        }
    };


    useEffect(() => {

        updateTimer();

        const timer = setInterval(
            updateTimer,
            1000
        );

        return () => {
            clearInterval(timer);
        };

    }, [INVITATION_TIME]);


    return (

        <div className="timer">

            <div className="dday-box">

                <div className="time-unit">
                    <span>
                        {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <p>DAYS</p>
                </div>


                <div className="time-unit">
                    <span>
                        {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <p>HOURS</p>
                </div>


                <div className="time-unit">
                    <span>
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <p>MIN</p>
                </div>


                <div className="time-unit">
                    <span>
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <p>SEC</p>
                </div>

            </div>


            <p className="dday-text">

                <b>
                    {timeLeft.days}일
                </b>

                {' '}남았습니다.

            </p>

        </div>
    );
};

export default Timer;

