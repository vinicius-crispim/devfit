import styled from 'styled-components';
import { Spaces } from '../../../styles/Sizes';
import { Colors } from '../../../styles/colors';
import { Breakpoints } from '../../../styles/breakpoints';

export const SuplementSection = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};
    background-color: ${Colors.background_white};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${Breakpoints.desktopXSM}{
        padding: ${Spaces.py_default} ${Spaces.px_desktopXSM_default};
    }
`

export const ParagraphStyled = styled.p`
    margin:0;
    text-align:center;
    font-size: 22px;
    letter-spacing: 2px;
    color: ${Colors.text_black};
`

export const SuplementsContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
    @media ${Breakpoints.desktopXSM} {
        width: 80%;
    }
    @media ${Breakpoints.mobile} {
        width: 100%;
    }
`

export const InputStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    input{
        border: 1px solid ${Colors.background_black};
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 20px;
        margin: 20px;
        width: 100%;
        background-color: #e4e4e4;
        color: ${Colors.text_black};
        font-weight: 600;
        font-family: 'LatoBold';
        outline: none;

        &::placeholder{
            color: ${Colors.text_black};
        }

        &:focus{
            border: 1px solid ${Colors.dark_orange_web};
        }
    }

    .inputIcon{
        position: absolute;
        right: 32px;
        font-size: 24px;
        color: ${Colors.dark_orange_web};
    }
    
    @media ${Breakpoints.mobile} {
        input {
            font-size: 16px;
        }
        .inputIcon{
            font-size: 20px;
        }
    }
`

export const SuplementsList = styled.ul`
    list-style: none;
    li{
        margin: 16px 0;
    }
`