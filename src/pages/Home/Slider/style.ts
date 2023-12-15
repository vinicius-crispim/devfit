import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { Breakpoints } from "../../../styles/breakpoints";

export const SliderContainer = styled.section`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80vh;

    .carousel-slide.active {
        opacity: 1;
    }

    .carousel-button:hover {
        background: rgba(255, 255, 255, 1);
    }

    .carousel-button.prev {
        left: 20px;
    }

    .carousel-button.next {
        right: 20px;
    }

    @media ${Breakpoints.mobile}{
        padding-top: 20vh;
    }
    @media ${Breakpoints.desktopXSM}{
        height: 80vh;
    }
`

export const Slide = styled.div`
    position: absolute;
    height: 80vh;
    width: 100%;
    transition: opacity 1s ease-in-out;
    opacity: 0;
`

export const SlideImg = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`

export const ButtonSlide = styled.button`
    position: absolute;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    color: ${Colors.black};
    border: 1px solid ${Colors.black};
    border-radius: 50%;
    font-size: 22px;
    transition: background 0.3s;
    top: 50%;    
    background: rgba(255, 255, 255, 0.7);
`