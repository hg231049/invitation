import '../css/message.css';
import '../css/aboutUs.css';
import groomImage from '../assets/hgg.jpg';
import brideImage from '../assets/les.jpg';
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

                <div className="person-list">
                
                    {/* GROOM */}
                    <article className="person-card">
                        <div className="person-photo">
                        <img
                            src={groomImage}
                            alt="신랑"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        </div>
        
                        <div className="person-info">
        
                        <h3>한건구</h3>
        
                        <p className="person-intro">
                            차분하고 다정한 사람
                        </p>
        
                        <div className="person-tags">
                            <span>#든든함</span>
                            <span>#여행</span>
                            <span>#맛있는거</span>
                        </div>
                        </div>
                    </article>
        
        
                    {/* BRIDE */}
                    <article className="person-card">
                        <div className="person-photo">
                        <img
                            src={brideImage}
                            alt="신부"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                        </div>
        
                        <div className="person-info">
        
                        <h3>이은서</h3>
        
                        <p className="person-intro">
                            밝고 호기심 많은 사람
                        </p>
        
                        <div className="person-tags">
                            <span>#기록</span>
                            <span>#사진</span>
                            <span>#여행</span>
                        </div>
                        </div>
                    </article>
        
                </div>
            </div>
        </section>
    );
};

export default Message;

