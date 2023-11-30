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
    justify-content: center;
    flex-direction: column;
    
    @media ${Breakpoints.desktopXSM} {
        width: 100%;
        flex-direction: row;
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
            margin-left: 0;
            margin-right: 0;
        }
        .inputIcon{
            font-size: 20px;
            right: 15px;
        }
    }
`

export const SuplementsList = styled.ul`
    list-style: none;
    margin-top: 12px;
    padding: 0 12px;

    @media ${Breakpoints.desktopXSM}{
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        align-items: center;
        justify-content: center;
    }
`

export const SuplementItem= styled.li`
    display: flex;
    justify-content: center;    
    align-items:center;
    border-radius: 8px;
    border: 0 solid transparent;
    box-shadow: ${Colors.black} 4px 4px 8px;
    background-color: ${Colors.background_gray};
    max-height: 700px;

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
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        height: 225px;
        p{
            margin-top: 0;
            margin-bottom: 42px;
            padding: 0 24px;
            text-align:justify;
            line-height: 1.3;
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
    
    @media ${Breakpoints.desktopXSM} {
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 580px;

        &:not(:first-child){
            margin-top: 0;
        }
        
        div{
            width: 275px;
        }

        img{
            object-fit: fill;
            margin-bottom: 24px;
        }

        div{
            height: 100%;
        }

        div h3{
            letter-spacing: 1px;
        }

        div p{
            padding: 0 16px;
            margin-top: 8px;
            margin-bottom: 0;
            height: 200px;
        }
    }

    @media ${Breakpoints.mobile}{
        width: 250px;

        div{
            width: 250px;
        }

        h3{
            font-size: 16px;
            letter-spacing: 1px;
        }

        div p {
            font-size: 14px;
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