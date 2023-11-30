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
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
    @media ${Breakpoints.desktopXSM} {
        width: 90%;
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
        background-color: ${Colors.background_gray};
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
    margin-top: 12px;
    padding: 0 12px;
    `

export const SuplementItem= styled.li`
    display: flex;
    justify-content: center;    
    align-items:center;
    border-radius: 8px;
    border: 0 solid transparent;
    box-shadow: ${Colors.black} 4px 4px 8px;
    &:not(:first-child){
        margin-top: 36px;
    }

    img{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        object-fit: cover;
        height: 225px;
        width: 225px;
    }
    
    background-color: ${Colors.background_gray};
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        height: 225px;
        p{
            margin-top: 0;
            margin-bottom: 4px;
            padding: 0 16px;
            text-align:justify
        }
        h3{
            background-color: ${Colors.orange_web};
            width: 100%;
            height: auto;
            margin-bottom: 8px;
            margin-top: 0;
            padding: 4px 0;
            font-family: LatoBold;
            font-weight: 600;
            letter-spacing: 2px;
        }
        span{
            letter-spacing: 2px;
            font-family: LatoBold;
            font-weight: 600;
            margin-bottom: 24px;
        }

    }
    
`

export const ShowMoreBtn = styled.button`
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid black;
    box-shadow: 2px 2px 4px ${Colors.background_black};
    margin: 24px 0;
    transition: .3s;
    cursor: pointer;
    font-size: 18px;
    background-color: ${Colors.background_gray};
    letter-spacing: 1px;
    &:hover{
        background-color: ${Colors.background_gray};
        letter-spacing: 2px;
        font-size: 22px;
    }
`