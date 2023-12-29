import styled from "styled-components";
import { Spaces } from "../../../styles/Sizes";
import { Colors } from "../../../styles/colors";
import { Breakpoints } from "../../../styles/breakpoints";


export const ContactSection = styled.section`
    padding: ${Spaces.py_default} ${Spaces.px_desktop_default};

    p{
        font-size: 20px;
        margin-top: 0;
        letter-spacing: 3px;
        text-align:center;
    }

    @media ${Breakpoints.desktopXSM}{
        padding: ${Spaces.py_default} ${Spaces.px_desktopXSM_default};
    }
`

export const ContactForm = styled.form`
    width: 85%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
`

export const ContactFormQuestions = styled.div`
    display: flex;
    gap: 36px;
    width: 100%;
    div{
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    @media ${Breakpoints.mobile}{
        flex-direction: column;
        align-items: center;
        gap: 0;

        div{
            width: 100%;
        }
    }
`

export const ContactFormLabel = styled.label`
    margin-top: 12px;
    margin-bottom: 6px;
    font-size: 15px;
    letter-spacing: 2px;
`

export const ContactFormInput = styled.input`
    margin-bottom: 12px;
    box-shadow: 3px 3px 8px ${Colors.background_black};
    padding: 8px 12px;
    border-radius: 8px;
    outline: none;
    font-size:16px;
    border-width:1px;
    `
export const ContactFormTextArea = styled.textarea`
    margin-bottom: 12px;
    font-size: 15px;
    border: 2px solid black;
    padding: 8px 12px;
    height: 100%;
    border-radius: 8px;
    outline:none;
    border-width:1px;
    box-shadow: 3px 3px 8px ${Colors.background_black};
    `

export const ContactFormButton = styled.button`
    border-radius: 18px;
    padding: 12px 18px;
    min-width: 35%;
    font-weight: 600;
    font-size: 18px;
    border: transparent;
    color: white;
    letter-spacing: 4px;
    background-color: ${Colors.red_button};
    box-shadow: 2px 2px 6px ${Colors.red_button_hover};

    &:hover{
        transition: .5s;
        letter-spacing: 6px;
        background-color: ${Colors.red_button_hover};
        cursor: pointer;
    }
`