import styled from "styled-components";
import { Breakpoints } from "../../../styles/breakpoints";
import { Colors } from "../../../styles/colors";
import { Spaces } from "../../../styles/Sizes";
import Background from '../../../assets/background-about.png'
export const DescriptionContainer = styled.div`
    padding: 0 ${Spaces.px_desktop_default};
    position: relative;
    top: 0;
    min-height: 80vh;
    overflow: hidden;

    &::before{
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background-image: url(${Background});        
        background-size: cover;
    }

    
    p,h2{
        position: relative;
    }
    
    h2{
        top: 24px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        gap:3rem;
        justify-content: center;
    }

    @media ${Breakpoints.desktopXSM}{
        h2{
            top: 8px;
            margin-bottom: 0;
        }
    }

    @media ${Breakpoints.mobile}{
        margin-top: 20vh;
        div{
            gap:2rem;
        }
        
    }
    `

export const ParagraphStyled = styled.p`
    margin: 12px auto;
    line-height: 1.5;
    font-size: 18px;
    letter-spacing: 2px;
    color: ${Colors.text_black};
    text-align:justify;
    font-weight: 600;
    max-width: 600px;
    margin: 0;
    top:52px;
    &:first-child{
        align-self: start;
        margin-left: 52px;
    }
    
    &:last-child{
        align-self: end;
        margin-right: 52px;

    }
    
    @media ${Breakpoints.desktopXSM}{
        
        &:first-child, &:last-child{
            align-self: center;
            margin-right: 52px;
            margin-left: 52px;
            top: 28px;
        }
        &:last-child{
            top: 4px;
        }
    }

    @media ${Breakpoints.mobile}{
        line-height: 1.2;
        &:first-child, &:last-child{
            top:20px;
        }
        
        &:last-child{
            top:8px;
            margin-bottom: 16px;
        }
        width: 100%;
    }
        
`