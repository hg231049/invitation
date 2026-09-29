import '../css/aboutUs.css';

import groomImage from '../assets/hgg.jpg';
import brideImage from '../assets/les.jpg';

const AboutUs = () => {
  return (
    <section className="about-us-section">

      <div className="about-us-inner">

        {/* SECTION TITLE */}
        <div className="about-us-heading">
          <span>ABOUT US</span>
          <h2>저희를 소개합니다</h2>
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

export default AboutUs;