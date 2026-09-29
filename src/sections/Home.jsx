import '../css/home.css';
import openingImage from '../assets/gallery1.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="opening">

      {/* ==================================================
          1. INTRO OVERLAY
      ================================================== */}
      <motion.div
        className="intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 3.6,
          duration: 1.1,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>HAPPY</span>

          <h1 className="font-pf typing-title">
            {['OUR', 'WEDDING', 'DAY'].map((word, wordIndex) => (
              <span key={word} className="typing-line">
                {[...word].map((char, charIndex) => (
                  <motion.span
                    key={`${word}-${charIndex}`}
                    className="typing-char"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.8 + wordIndex * 0.75 + charIndex * 0.12,
                      duration: 0.08,
                      ease: 'linear',
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < 2 && <br />}
              </span>
            ))}
          </h1>

          <p>HAN HUNGU & LEE EUN SEO</p>
        </motion.div>
      </motion.div>


      {/* ==================================================
          2. MAIN OPENING (Image Scale Animation)
      ================================================== */}
      <div className="main-opening">

        {/* 배경 이미지: 확대(1.25) 되었다가 원본(1)으로 돌아오는 모션 */}
        <motion.img
          src={openingImage}
          alt="오프닝 사진"
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 3.5,       // 인트로 페이드아웃 직전에 시작
            duration: 1.6,     // 부드럽게 줌인(스케일 다운)되는 시간
            ease: [0.25, 1, 0.5, 1],
          }}
        />

        <div className="inside-overlay" />

        {/* 메인 텍스트: 이미지가 원본 크기로 돌아온 직후 등장 */}
        <motion.div
          className="inside-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 5.0,       // 이미지 복원이 끝나는 시점에 글자 렌더링
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="poster-title">
            <h1>
              WE'RE GETTING
              MARRIED
            </h1>
            {/* 가장 마지막에 등장 */}
          <motion.div
            className="save-date"
            initial={{
              opacity: 0,
              y: 10,
              rotate: -3,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -3,
            }}
            transition={{
              delay: 6.0,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Save the Date
          </motion.div>
          </div>

          <div className="poster-info">
            <div>
              HAN GUNGU
              <br />
              & LEE EUNSEO
            </div>

            <div>
              2027.12.11 SAT
              <br />
              AM 10:40
            </div>
          </div>
           
        </motion.div>

      </div>

    </section>
  );
};

export default Home;