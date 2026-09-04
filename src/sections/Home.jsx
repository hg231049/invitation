import { useState } from 'react';
import '../css/home.css';

const Home = ({isOpen, setIsOpen}) => {
   

    return (
        <section className={`opening ${isOpen ? 'is-open' : ''}`}>

            <div
                className="book"
                onClick={() => setIsOpen(true)}
            >

                {/* 열리고 난 뒤 보이는 이미지 */}
                <div className="inside-page">

                    <img
                        src="https://ecimg.cafe24img.com/pg3200b63747097031/mahanakr/web/upload/NNEditor/20260826/32bd8438912eac512e0368db48cfdacf.png"
                        alt="웨딩 사진"
                    />

                    <div className="inside-content">
                        <span>OUR </span>

                        <h1>
                            은서 
                        </h1>

                        <p>
                            2026. 10. 24 SAT
                        </p>
                    </div>

                </div>


                {/* 닫혀있는 표지 */}
                <div className="cover">

                    <div className="cover-content">
                        <span>WEDDING</span>

                        <h1>
                            INVITATION
                        </h1>

                        <p>
                            EUNSEO & MINJUN
                        </p>
                    </div>

                    <div className="cover-edge"></div>

                </div>

            </div>


            <div className="open-guide">
                <span>OPEN</span>
            </div>

        </section>
    );
};

export default Home;