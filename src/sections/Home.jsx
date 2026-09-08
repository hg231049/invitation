import '../css/home.css';
import openingImage from '../assets/opening.jpeg';
import { motion } from 'framer-motion';

const Home = ({ isOpen, setIsOpen }) => {

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  return (
    <section className={`opening ${isOpen ? 'is-open' : ''}`}>
      <div
        className="book"
        onClick={handleOpen}
      >
        <div className="inside-page">
          <img
            src={openingImage}
            alt="오프닝 사진"
          />
          <div className="inside-overlay" />
            <div className="inside-content">

              <motion.span
                className="our"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={
                  isOpen
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 25,
                      }
                }
                transition={{
                  delay: 1.05,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                OUR
              </motion.span>

              <motion.h1
                className="font-pf"
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      delayChildren: 1.45,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >

                {['Welcome', 'To The', 'Show'].map((text) => (

                  <motion.span
                    key={text}
                    className="title-line"

                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 55,
                        scale: 0.88,
                      },

                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,

                        transition: {
                          type: 'spring',
                          stiffness: 180,
                          damping: 10,
                          mass: 0.8,
                        },
                      },
                    }}
                  >
                    {text}
                  </motion.span>

                ))}

              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  isOpen
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                transition={{
                  delay: 2.8,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                2026. 10. 24 SAT
              </motion.p>

            </div>
        </div>

        <div className="cover">
          <div className="cover-paper">
            <div className="cover-content">
              <span> WEDDING</span>
              <h1>INVITATION</h1>
              <p>LEE EUNSEO & HAN GUNGU</p>
            </div>
            <div className="paper-edge" />
          </div>
        </div>
      </div>

      <div
        className={`open-guide ${isOpen ? 'hidden' : ''}`}
      >
        <span>OPEN</span>
      </div>

    </section>
  );
};

export default Home;