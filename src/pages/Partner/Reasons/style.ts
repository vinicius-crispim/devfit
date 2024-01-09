import styled from "styled-components";
import { spaces } from "../../../styles/sizes";
import { colorsVar } from "../../../styles/colors";
import { breakpoints } from "../../../styles/breakpoints";


export const ReasonsStyled = styled.section`
    padding: ${spaces.py_default} ${spaces.px_desktop_default};
    padding-top: 0;
    @media ${breakpoints.desktopXSM}{
        padding: ${spaces.py_default} ${spaces.px_desktopXSM_default};
    }
`
export const ReasonsContainerStyled = styled.section`
    display: flex;
`

export const ImgContainer = styled.div`

    width:50%;
    img{
        width: 100%;
        height: 100%;
        padding-left: 32px;
        border-radius: 16px;
    }
    
    @media ${breakpoints.desktopXSM}{
        width:45%;
    }

    @media ${breakpoints.mobile}{
        display: none;
    }
`

export const ReaonsList = styled.ul`
    list-style: none;
    width: 50%;
    padding-left: 0;
    li{
        display: flex;
        align-items: center;
        gap: 24px;
        margin: 4px 0;
        margin-left: 16px;
        p{
            font-size: 20px;
            letter-spacing: 2px;
            line-height: 1.1;
            padding-right: 36px;
            text-align:justify;
        }
        
        svg{
            color: ${colorsVar.graph_green};
            
        }
    }
    
    @media ${breakpoints.desktopXSM}{
        width: 55%;
        li{
            p{
                font-size: 18px;               
            }             
        }
    }

    @media ${breakpoints.mobile}{
        width: 100%;

        li{
            margin-left: 0;
            p{
                padding-right: 0;
            }
        }
    }
`

export const IconContainer = styled.div`
    height: 25px;
    width: 25px;

    @media ${breakpoints.mobile}{

        margin-right: 16px;
    }
`