import '../css/home.css';
import openingImage from '../assets/gallery11.jpg';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <section className="opening">

      {/* ==================================================
          INTRO
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

          <p>
            HAN HUNGU & LEE EUN SEO
          </p>

        </motion.div>

      </motion.div>


      {/* ==================================================
          MAIN
      ================================================== */}

      <div className="main-opening">

        <img
          src={openingImage}
          alt="오프닝 사진"
        />

        <div className="inside-overlay" />


        {/* MAIN CONTENT */}

        <motion.div
          className="inside-content"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.35,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="poster-title">

            <h1>
              WE'RE GETTING
              MARRIED
            </h1>

   

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