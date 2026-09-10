import '../css/message.css';
const Message = () => {
    return (
        <section className="section wedding-section message-section">
            <div className="inner">
                <p className="message-label">MESSAGE</p>

                <div className="message-content">
                    <p>
                        하얀 눈이 세상을 소복이 덮어가듯<br />
                        우리의 하루에도 사랑이 차곡차곡 쌓였습니다.<br />
                        그렇게 쌓아온 사랑으로<br />
                        이제 평생의 약속으로 이어가려 합니다.
                    </p>

                    <p>
                        수많은 계절을 지나 서로의 곁을 지나온 두 사람이<br />
                        앞으로 모든 날을 함께 걸어가려 합니다.
                    </p>

                    <p>
                        저희의 새로운 시작에<br />
                        소중한 분들을 초대합니다.
                    </p>
                </div>

                <div className="message-signature">
                    <strong>이은서 & 한건구</strong>
                </div>
            </div>
        </section>
    );
};

export default Message;

