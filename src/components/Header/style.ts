import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { FontsSizes, Spaces } from "../../styles/Sizes";
import { Breakpoints } from "../../styles/breakpoints";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 0 ${Spaces.px_desktop_default};
    align-items: center;
    flex-wrap: wrap;
    background-color:${Colors.background_black};
    height: 20vh;
    h1{
        margin: 0;
        height:130px;
    }

    @media ${Breakpoints.desktopXSM}{
        padding: 0 ${Spaces.px_desktopXSM_default};
    }

    @media ${Breakpoints.mobile}{
        position: fixed;
        width:100%;
        z-index: 1;
        justify-content: space-around;
        padding: 0;
    }
    
`

export const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ListStyled = styled.ul<{ $isOpen?: boolean; }>`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    li{
        list-style: none;
        a{
            font-weight:600;
            font-family: 'LatoBold';
            font-size: ${FontsSizes.nav_title_desktop};
            color: ${Colors.platinum};
            text-decoration: none;
            letter-spacing: 2px;
        }
    }
    
    li:hover a{
        transition: .3s;
        color: ${Colors.orange_web};
        border-bottom: 2px solid ${Colors.orange_web};
        padding-bottom: 4px;
    }

    @media ${Breakpoints.desktopXSM}{
        gap: 1rem;

        li a {
            letter-spacing: 1px;
        }
    }
    
    @media ${Breakpoints.mobile} {
        transition: .6s;
        flex-direction: column;
        gap: 12px;
        height: 180px;
        position: fixed;
        z-index: 1;
        top:130px;
        right: ${props => props.$isOpen ? '-32px' : '-250px' };
        display: flex;
        background: ${Colors.background_black};
        padding: 0 52px 0 12px;
        align-items: start;
        justify-content: center;
        
        li{
            a{
                color: ${Colors.platinum};
                font-size: 1rem;
            }
            a:hover{        
                color: ${Colors.platinum};
                border-bottom: none;
                padding-bottom: 0;
            }
        }
    }
`

export const MenuBtn = styled.button< {$isOpen? : boolean} >`
    background-color: transparent;
    border: none;
    display: none;

    .icone{
        height: 60px;
        width: 60px;
        color: ${props => props.$isOpen ? `${Colors.orange_web}` : `${Colors.platinum}`};
    }

    @media ${Breakpoints.mobile}{
        display: block;
    }
`