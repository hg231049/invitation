import { useState } from 'react';
import SectionTitle from "../components/SectionTitle";
import '../css/gallery.css';

const Gallery = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
        '/images/opening.jpeg',
    ];


    // =========================
    // 갤러리 열기
    // =========================

    const openGallery = (index) => {
        setCurrentIndex(index);
        setIsGalleryOpen(true);

        document.body.style.overflow = 'hidden';
    };


    // =========================
    // 갤러리 닫기
    // =========================

    const closeGallery = () => {
        setIsGalleryOpen(false);

        document.body.style.overflow = '';
    };


    // =========================
    // 다음 사진
    // =========================

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };


    // =========================
    // 이전 사진
    // =========================

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    };


    return (
        <section className="gallery-section">

            <div className="inner">

                {/* =========================
                    Section Title
                ========================== */}

                <SectionTitle
                    subTitle="Gallery"
                    title="our moments"
                />


                {/* =========================
                    Gallery Preview
                    메인에서는 7장만 노출
                ========================== */}

                <div className="gallery-preview">

                    {images.slice(0, 7).map((image, index) => (

                        <button
                            key={index}
                            className={`gallery-photo gallery-photo--${String(index + 1).padStart(2, '0')}`}
                            onClick={() => openGallery(index)}
                        >

                            <img
                                src={image}
                                alt={`웨딩 사진 ${index + 1}`}
                            />

                            <span>
                                {String(index + 1).padStart(2, '0')}
                            </span>

                        </button>

                    ))}

                </div>


                {/* =========================
                    View All
                ========================== */}

                <button
                    className="gallery-view-all"
                    onClick={() => openGallery(0)}
                >

                    <span>VIEW ALL</span>

                    <em>·</em>

                    <span>
                        {String(images.length).padStart(2, '0')} MOMENTS
                    </span>

                </button>

            </div>


            {/* =========================
                Full Gallery Modal
            ========================== */}

            {isGalleryOpen && (

                <div className="gallery-modal">

                    {/* 닫기 */}

                    <button
                        className="gallery-modal-close"
                        onClick={closeGallery}
                        aria-label="갤러리 닫기"
                    >
                        ×
                    </button>


                    {/* 이전 */}

                    <button
                        className="gallery-arrow gallery-arrow--prev"
                        onClick={prevImage}
                        aria-label="이전 사진"
                    >
                        ←
                    </button>


                    {/* 사진 */}

                    <div className="gallery-modal-content">

                        <img
                            src={images[currentIndex]}
                            alt={`웨딩 사진 ${currentIndex + 1}`}
                        />

                        <div className="gallery-counter">

                            <span>
                                {String(currentIndex + 1).padStart(2, '0')}
                            </span>

                            <i>/</i>

                            <span>
                                {String(images.length).padStart(2, '0')}
                            </span>

                        </div>

                    </div>


                    {/* 다음 */}

                    <button
                        className="gallery-arrow gallery-arrow--next"
                        onClick={nextImage}
                        aria-label="다음 사진"
                    >
                        →
                    </button>

                </div>

            )}

        </section>
    );
};

export default Gallery;