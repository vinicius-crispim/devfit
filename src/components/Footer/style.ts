import styled from "styled-components";
import img from '../../assets/wave_background.png'
import { colors } from "../../styles/colors";

export const FooterStyled = styled.footer`
    width: 100%;
    background-image: url(${img});
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 0 0 16px 0;

    h3{
        font-size: 1.1rem;
        color: ${colors.platinum};
        letter-spacing: 2px;
        margin: 0;       
    }
`

export const SocialMediaStyled = styled.div`
    display: flex;
    gap: 12px;
    margin: 12px;
    justify-content: center;
    align-items: center;
    .icone{
        color: ${colors.platinum};
        border-radius: 50%;
        padding: 8px;
        width: 18px;
        height: 18px;
        border: 1px solid ${colors.platinum};
        transition: .3s;
        cursor: pointer;
    }
    
    .icone:hover{
        background-color: ${colors.background_black_opacity};
    }
`

