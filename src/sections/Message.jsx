import '../css/message.css';
const Message = () => {
    return (
        <section className="section wedding-section message-section">
            <div className="inner">
                <p className="message-label">MESSAGE</p>

                <div className="message-content">
                    <p>
                        평범했던 하루에<br />
                        서로가 특별해졌습니다.
                    </p>

                    <p>
                        함께 웃고, 함께 걷고,<br />
                        서로의 가장 가까운 곳에서<br />
                        같은 계절을 바라보려 합니다.
                    </p>

                    <p>
                        저희의 새로운 시작에<br />
                        소중한 분들을 초대합니다.
                    </p>
                </div>

                <div className="message-signature">
                    <strong>은서 & 겅구</strong>
                </div>
            </div>
        </section>
    );
};

export default Message;

