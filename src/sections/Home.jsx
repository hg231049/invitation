import '../css/home.css';
import openingImage from '../assets/opening.jpeg';

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
                        src={openingImage}
                        alt="배경 사진"
                    />

                    <div className="inside-content">
                        <span>OUR </span>

                        <h1 className=' font-pf'>
                            Welcome <br/>
                            To The<br/>
                            Show
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
                            EUNSEO & GUNGU
                        </p>
                    </div>

                    

                </div>

            </div>


            <div className="open-guide">
                <span>OPEN</span>
            </div>

        </section>
    );
};

export default Home;