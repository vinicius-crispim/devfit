import styled from "styled-components";
import { Spaces } from "../../../styles/sizes";
import { colors } from "../../../styles/colors";
import { breakpoints } from "../../../styles/breakpoints";


export const PlansSection = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};
`

export const PlansContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: ${colors.text_black};
    gap:44px;
`

export const PlanCard = styled.div`
    width: 300px;
    display: flex;
    max-height: 411px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0 solid transparent;
    background-color: ${colors.background_gray};
    box-shadow: ${colors.black} 4px 4px 8px;
    border-radius: 16px;

    .plan-info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h3{
        background-color: ${colors.orange_web};
        width:100%;
        padding: 8px 0;
        margin: 0;
        text-align:center;
    }

    p, span{
        padding: 8px 16px;
        margin-bottom: 0px;
        margin-top: 0px;
        text-align:justify;
    }
    
    span, h3 {
        font-family: 'LatoBold';
        font-weight: 600;
        letter-spacing: 2px;
    }
    
    img{
        width: 300px;
        height: 250px;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }

    @media ${breakpoints.mobile}{
        width: 250px;
        img{
        width: 250px;
        height: 200px;
        }
    }
`