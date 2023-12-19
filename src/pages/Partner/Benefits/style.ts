import styled from "styled-components";
import { Spaces } from "../../../styles/Sizes";
import { Breakpoints } from "../../../styles/breakpoints";
import { Colors } from "../../../styles/colors";

export const BenefitsContainer = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${Breakpoints.desktopXSM}{
        padding: ${Spaces.py_default} ${Spaces.px_desktopXSM_default};
    }
    `

export const BenefitsList = styled.ul`
    list-style: none;
    gap: 28px;
    width: 85%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    padding-left: 0;

    /* Firefox */ 
   scrollbar-width: thin;
    scrollbar-color: ${Colors.white} ${Colors.black};
    
    /* Chrome, Edge e Safari */
    &::-webkit-scrollbar {
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 10px;
      box-shadow:  0 0 10px ${Colors.black};
      
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #606060;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #484848;
    }
    li{
        display: inline-block;
        padding: 0 8px 28px;
        &:last-child{
            margin-right: 8px;
        }
    }
    @media ${Breakpoints.desktopXSM}{
        width: 90%;
    }
    @media ${Breakpoints.mobile}{
        width: 100%;
        gap: 8px;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        overflow-x: hidden;

        li{
            width: 275px;
            max-height: 480px;

        }
    }
`

export const BenefitsCard = styled.div`
    width: 300px;
    display: flex;
    max-height: 440px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0 solid transparent;
    background-color: ${Colors.background_gray};
    box-shadow: ${Colors.black} 4px 4px 8px;
    border-radius: 16px;


    h3{
        background-color: ${Colors.orange_web};
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

    .plan-info{
        height: 200px;
    }

    @media ${Breakpoints.mobile}{
        width: 250px;
        max-height: 410px;
        img{
        width: 250px;
        height: 200px;
        }
    }
`