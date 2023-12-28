import styled from "styled-components";
import { Spaces } from "../../../styles/Sizes";
import { Colors } from "../../../styles/colors";
import { Breakpoints } from "../../../styles/breakpoints";


export const ReasonsStyled = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};
    padding-top: 0;
    @media ${Breakpoints.desktopXSM}{
        padding: ${Spaces.py_default} ${Spaces.px_desktopXSM_default};
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
    
    @media ${Breakpoints.desktopXSM}{
        width:45%;
    }

    @media ${Breakpoints.mobile}{
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
            color: ${Colors.graph_green};
            
        }
    }
    
    @media ${Breakpoints.desktopXSM}{
        width: 55%;
        li{
            p{
                font-size: 18px;               
            }             
        }
    }

    @media ${Breakpoints.mobile}{
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

    @media ${Breakpoints.mobile}{

        margin-right: 16px;
    }
`