import React, { useState, useEffect } from 'react';
import './style';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import * as S from './style';
// import { Slide, SlideImg, SliderContainer, ButtonSlide } from './style';

interface SliderProps {
    images: string[];
    interval?: number;
}

const Slider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (activeIndex === images.length - 1) {
                setActiveIndex(0);
            } else {
                setActiveIndex((prevIndex) => (prevIndex + 1));
            }
        }, interval);
        return () => clearInterval(timer);
    }, [activeIndex, images, interval]);
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    return (
        <S.SliderContainer>
            {images.map((image, index) => (
                <S.Slide
                    key={image}
                    className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                >
                    <S.SlideImg src={image} alt="carousel slide" />
                </S.Slide>
            ))}
            <S.ButtonSlide className="carousel-button prev" onClick={handlePrevClick}>
                <MdNavigateBefore />
            </S.ButtonSlide>
            <S.ButtonSlide className="carousel-button next" onClick={handleNextClick}>
                <MdNavigateNext />
            </S.ButtonSlide>
        </S.SliderContainer>
    );
};

export default Slider;