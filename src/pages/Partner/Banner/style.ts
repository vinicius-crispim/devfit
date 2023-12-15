import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import background from '../../../assets/partner-background.png'
import { Spaces } from "../../../styles/Sizes";
import { Breakpoints } from "../../../styles/breakpoints";

export const BannerSection = styled.section`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: LatoBold;
    font-weight: 600;
    div{
        width:50%;
        height: 100%;
    }
    
    div:first-child{
        padding-left: ${Spaces.px_desktop_default};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        h2{
            position: relative;
            bottom: 10px;
            color: black;
            max-width: 90%;
            line-height: 1.3;
            font-size: 28px;
            margin-bottom: 0;
        }

        span{
            max-width: 90%;
            line-height: 1.1;
            letter-spacing: 2px;
            text-align: center;
            font-size: 18px;
            margin-bottom: 28px;
        }
    }
    
    div:last-child{
        display:flex;
        align-items: center;
        justify-content: center;
        
        img{
            border-radius: 16px;
            border: transparent;
            width: 75%;
            height: 85%;
            position: relative;
            right: 32px;
            object-fit: cover;
        }
    }

    @media ${Breakpoints.desktopXSM}{
        
        div:first-child{
            padding: 0 ${Spaces.px_desktopXSM_default};

            h2{
                font-size: 26px;
            }
                
            span{
                font-size: 16px;
            }
        }

        div:last-child{
            padding: 0 ${Spaces.px_desktopXSM_default};
            img{
                width: 100%;
                right: 20px;
            }
        }
    }

    @media ${Breakpoints.mobile}{
        margin-top: 20vh;
        div:first-child{
            width: 100%
        }
        div:last-child{
            display: none;
        }
    }
`

export const ButtonStyled = styled.button`
    border: transparent;
    color: white;
    font-size: 20px;
    letter-spacing: 4px;
    border-radius: 22px;
    padding: 12px 16px;
    width: 80%;
    background-color: #E80000;
    
    &:hover{
        background-color: #900D0D;
        cursor: pointer;
    }

    @media ${Breakpoints.desktopXSM}{
        font-size: 18px;
        width: 90%;
    }
`