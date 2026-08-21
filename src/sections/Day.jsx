import InvitationCalender from '../components/InvitationCalender';
import Timer from '../components/Timer'
import dayjs from 'dayjs';
import '../css/day.css'
const Day = () => {

    const INVITATION_TIME = '2026-10-24T13:00:00';

    return (
        <section className=''>
            <div className="inner">
                <div className="invitation-container w-full">
                    <h3 className='relative mb-10 font-bold text-center'>{dayjs(INVITATION_TIME).format('YYYY년 MM월 DD일 dddd A h시')}</h3>
                    <InvitationCalender/>
                    <Timer INVITATION_TIME={INVITATION_TIME}/>
                </div>
            </div>
        </section>
    )
}

export default Day;