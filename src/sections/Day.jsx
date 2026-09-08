
import dayjs from 'dayjs';
import SectionTitle from "../components/SectionTitle";
import InvitationCalender from '../components/InvitationCalender';
import Timer from '../components/Timer';
import '../css/day.css';

const INVITATION_TIME = '2026-10-24T13:00:00';

const Day = () => {

    const invitationDate = dayjs(INVITATION_TIME);

    return (
        <section className="wedding-section day-section">

            <div className="inner">

                <SectionTitle
                    subTitle="Day"
                    title="our day"
                />


                {/* =================================
                    DATE
                ================================= */}

                <div className="day-date">

                    <p className="day-date__year">
                        {invitationDate.format('YYYY')}
                    </p>

                    <div className="day-date__main">

                        <span className="day-date__month">
                            {invitationDate.format('MMMM')}
                        </span>

                        <strong>
                            {invitationDate.format('DD')}
                        </strong>

                        <span className="day-date__weekday">
                            {invitationDate.format('dddd')}
                        </span>

                    </div>

                    <p className="day-date__time">
                        {invitationDate.format('A h:mm')}
                    </p>

                </div>


                {/* =================================
                    CALENDAR
                ================================= */}

                <div className="day-calendar">

                    <InvitationCalender />

                </div>


                {/* =================================
                    D-DAY
                ================================= */}

                <div className="day-countdown">

                    <p className="day-countdown__label">
                        UNTIL OUR DAY
                    </p>

                    <Timer
                        INVITATION_TIME={INVITATION_TIME}
                    />

                </div>

            </div>

        </section>
    );
};

export default Day;

