import styled from "styled-components";
import { Spaces } from "../../../styles/Sizes";
import { Colors } from "../../../styles/colors";
import { Breakpoints } from "../../../styles/breakpoints";

export const FeaturesContainer = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FeaturesList = styled.ul`
    margin: 0 auto;
    padding-left: 0;
    width: 75%;
    
    @media ${Breakpoints.desktopSM}{
        width: 90%; 
    }
    
    @media ${Breakpoints.mobile}{
        width: 100%; 
    }
`

export const FeaturesList_Item = styled.li<{$direction?: boolean; }>`
    display: flex;
    gap:28px;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 24px 0;
    flex-direction: ${props => props.$direction ? "row" : "row-reverse"};

    h3{ 
        text-align: center;
        margin: 0;
        color: ${Colors.orange_web};
        font-size: 24px;
        filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.4));

        letter-spacing: 6px;
        width:220px;
    }

    p{
        padding: 12px 8px;
        text-align: justify;
        line-height: 1.3;
        font-size: 1.1rem;
        margin: 0;
        letter-spacing: 1px;
    }

    @media ${Breakpoints.desktopXSM}{
        flex-direction:column;

        p{
            padding: 0;
        }
    }

    @media ${Breakpoints.mobile}{
        margin: 12px 0;
        padding: 0;
    }

`

export const FinalParagraph = styled.p`
    text-align:justify;
    letter-spacing: 1px;
    line-height: 1.2;
    font-size: 1.25rem;
    width: 90%;

    span{
        font-family: LatoBold;
        font-weight: 600;
    }

    @media ${Breakpoints.mobile}{
        width: 100%;
    }
`