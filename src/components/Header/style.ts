import styled from "styled-components";
import { colorsVar } from "../../styles/colors";
import { fontsSizes, spaces } from "../../styles/sizes";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 0 ${spaces.px_desktop_default};
    align-items: center;
    flex-wrap: wrap;
    background-color:${colorsVar.background_black};
    height: 20vh;
    h1{
        margin: 0;
    }

    @media ${breakpoints.desktopXSM}{
        padding-bottom: 0;
    }

    @media ${breakpoints.mobile}{
        position: fixed;
        top:0;
        width:100%;
        z-index: 1;
        justify-content: space-around;
        padding: 0;

        h1{
            height: 110px;
            img{
                height: 110px;
            }
        }
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
            font-size: ${fontsSizes.nav_title_desktop};
            color: ${colorsVar.platinum};
            text-decoration: none;
            letter-spacing: 2px;
        }
    }
    
    li:hover a{
        transition: .3s;
        color: ${colorsVar.orange_web};
        border-bottom: 2px solid ${colorsVar.orange_web};
        padding-bottom: 4px;
    }

    @media ${breakpoints.desktopXSM}{
        gap: 1rem;

        li a {
            letter-spacing: 1px;
        }
    }
    
    @media ${breakpoints.mobile} {
        transition: .6s;
        flex-direction: column;
        gap: 12px;
        height: 120px;
        position: fixed;
        z-index: 1;
        top:80px;
        right: ${props => props.$isOpen ? '-32px' : '-250px' };
        display: flex;
        background: ${colorsVar.background_black};
        padding: 0 52px 0 12px;
        align-items: start;
        justify-content: center;
        
        li{
            a{
                color: ${colorsVar.platinum};
                font-size: 1rem;
            }
            a:hover{        
                color: ${colorsVar.platinum};
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
        color: ${props => props.$isOpen ? `${colorsVar.orange_web}` : `${colorsVar.platinum}`};
    }

    @media ${breakpoints.mobile}{
        display: block;
    }
`