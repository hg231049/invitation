import { useState,useRef } from 'react';
import SectionTitle from "../components/SectionTitle";
import '../css/gallery.css';

const Gallery = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/images/opening.jpeg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.gif',
        '/images/gallery6.jpg',
        '/images/gallery7.png',
        '/images/gallery8.jpg',
        '/images/gallery9.jpg',
        '/images/gallery10.jpg',
        '/images/gallery11.jpg',
        '/images/gallery12.jpg',
        '/images/gallery13.jpg',
        '/images/gallery14.jpg',
        '/images/gallery15.jpg',
        '/images/gallery16.jpg',
        '/images/gallery17.jpg',
        '/images/gallery18.jpg',
    ];


    // 갤러리 열기
    const openGallery = (index) => {
        setCurrentIndex(index);
        setIsGalleryOpen(true);

        document.body.style.overflow = 'hidden';
    };

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX.current;

        // 50px 이상 움직였을 때만 스와이프
        if (Math.abs(distance) < 50) return;

        if (distance > 0) {
            // 왼쪽으로 스와이프 → 다음
            nextImage();
        } else {
            // 오른쪽으로 스와이프 → 이전
            prevImage();
        }
    };


    // 갤러리 닫기
    const closeGallery = () => {
        setIsGalleryOpen(false);

        document.body.style.overflow = '';
    };


    // 다음 사진
    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    };


    // 이전 사진
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

                <SectionTitle
                    subTitle="Gallery"
                    title="our moments"
                />


                {/* Masonry Gallery */}

                <div className="gallery-preview">

                    {images.slice(0, 8).map((image, index) => (

                        <button
                            key={index}
                            className="gallery-photo"
                            onClick={() => openGallery(index)}
                        >

                            <img
                                src={image}
                                alt={`웨딩 사진 ${index + 1}`}
                            />

                            

                        </button>

                    ))}

                </div>


                {/* View All */}

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


            {/* Full Gallery Modal */}

            {isGalleryOpen && (

                <div 
                    className="gallery-modal" 
                >

                    <button
                        className="gallery-modal-close"
                        onClick={closeGallery}
                        aria-label="갤러리 닫기"
                    >
                        ×
                    </button>


                    <button
                        className="gallery-arrow gallery-arrow--prev"
                        onClick={prevImage}
                        aria-label="이전 사진"
                    >
                        ←
                    </button>


                    <div 
                    className="gallery-modal-content"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    >

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