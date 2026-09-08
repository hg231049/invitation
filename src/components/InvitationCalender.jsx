
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const INVITATION_DATE = '2026-10-24';

const InvitationCalender = () => {

    const renderTileContent = ({ date, view }) => {

        if (view !== 'month') {
            return null;
        }

        const formattedDate = dayjs(date).format('YYYY-MM-DD');

        if (formattedDate === INVITATION_DATE) {
            return (
                <span className="invitation-heart">
                    ♥
                </span>
            );
        }

        return null;
    };


    return (

        <div className="invitation-calendar">

            <Calendar
                value={new Date(INVITATION_DATE)}
                activeStartDate={new Date(INVITATION_DATE)}

                formatDay={(locale, date) =>
                    dayjs(date).format('D')
                }

                tileContent={renderTileContent}

                prev2Label={null}
                next2Label={null}

                showNeighboringMonth={false}

                locale="en-US"

                navigationLabel={({ date }) =>
                    dayjs(date).format('MMMM YYYY')
                }

                prevLabel="‹"
                nextLabel="›"
            />

        </div>
    );
};

export default InvitationCalender;

