// react-calendar 기본 스타일 불러오기
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const InvitationCalender = () => {
    const INVITATION_DATE = '2026-10-24';
    // 캘린더 날짜 박스 내부에 하트 표시
    const renderTileContent = ({date,view}) => {
        if(view === 'month'){
            const formattedDate = dayjs(date).format('YYYY-MM-DD');
            if(formattedDate === INVITATION_DATE){
                return <div className='invitation-heart'>♥</div>;
            }
        }
         return null;
    };


    return (
        <div>
             <Calendar
                value={new Date(INVITATION_DATE)}
                activeStartDate={new Date(INVITATION_DATE)} // 초대이 속한 달로 기본 고정
                formatDay={(locale, date) => dayjs(date).format('D')} // '일' 글자 제거하고 숫자만
                tileContent={renderTileContent}
                prev2Label={null} // 년 단위 이동 버튼 숨김
                next2Label={null}
             />
        </div>
    )
}

export default InvitationCalender;