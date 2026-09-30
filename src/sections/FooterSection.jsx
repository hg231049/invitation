import '../css/footer.css';
import Share from '../components/Share';
import finallyImg from '../assets/gallery18.jpg';

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-inner">

        {/* ==================================================
            ENDING IMAGE
        ================================================== */}
        <div className="footer-image">
          <img
            src={finallyImg}
            alt="신랑 신부"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>


        {/* ==================================================
            ENDING CREDITS
        ================================================== */}
        <div className="footer-credit">
          <h2>
            OUR STORY
            <br />
            CONTINUES
          </h2>

          <p className="footer-message">
            저희의 소중한 날에
            <br />
            함께해주셔서 감사합니다.
          </p>


          <div className="footer-names">
            <span>한건구</span>
            <i>&amp;</i>
            <span>이은서</span>
          </div>


          <div className="footer-date">
            <span>2027.12.11</span>
            <span>AM 10:40</span>
          </div>

        </div>


        {/* ==================================================
            SHARE
        ================================================== */}
        <div className="footer-share">
          <Share />
        </div>


        {/* ==================================================
            FINAL
        ================================================== */}
        <div className="footer-final">
          <p>
            © 2027 HANGUNGU & LEEEUNSEO
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;