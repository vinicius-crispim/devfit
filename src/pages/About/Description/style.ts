import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colors } from "../../../styles/colors";
import { Spaces } from "../../../styles/sizes";
import Background from '../../../assets/background-about.png'

export const DescriptionContainer = styled.section`
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

    @media ${breakpoints.desktopXSM}{
        h2{
            top: 8px;
            margin-bottom: 0;
        }
    }

    @media ${breakpoints.mobile}{
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
    letter-spacing: 1px;
    color: ${colors.text_black};
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
    
    @media ${breakpoints.desktopXSM}{
        
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

    @media ${breakpoints.mobile}{
        line-height: 1.2;
        font-size: 16px;

        &:first-child, &:last-child{
            top:42px;
        }
        
        &:last-child{
            top:40px;
            margin-bottom: 46px;
        }
        width: 100%;
    }
        
`