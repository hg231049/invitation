import '../css/home.css';
import openingImage from '../assets/opening.jpeg';
import { motion } from 'framer-motion';

const Home = ({ isOpen, setIsOpen }) => {
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

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                isOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                delay: 0.5,
                type: 'spring',
                stiffness: 180,
                damping: 12
              }}
            >
              OUR
            </motion.span>

            <motion.h1
            className="font-pf"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.16,
                },
                },
            }}
            >
            {["Welcome", "To The", "Show"].map((text) => (
                <motion.span
                key={text}
                className="block"
                variants={{
                    hidden: {
                    opacity: 0,
                    y: 45,
                    scale: 0.9,
                    },
                    visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 140,
                        damping: 12,
                    },
                    },
                }}
                >
                {text}
                </motion.span>
            ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                delay: 0.85,
                type: 'spring',
                stiffness: 180,
                damping: 14
              }}
            >
              2026. 10. 24 SAT
            </motion.p>

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


      <div className={`open-guide ${isOpen ? 'hidden' : ''}`}>
        <span>OPEN</span>
      </div>

    </section>
  );
};

export default Home;