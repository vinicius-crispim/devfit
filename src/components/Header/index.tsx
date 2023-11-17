import Logo from '../../assets/Logo.png'
import * as S from './style';
import Links from './data.json'
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.HeaderStyled>
            <h1><a href="#home"><img src={Logo} alt="DevFit" /></a></h1>
            <S.NavStyled>
                <S.MenuBtn  $isOpen={isOpen} onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <IoIosMenu className='icone'/>
                </S.MenuBtn>
                <S.ListStyled $isOpen={isOpen}>
                    {
                        Links.map((link: typeof Links[1], index: number) => {
                            return <li key={index}><a href={link.link}>{link.titulo}</a></li>
                        })
                    }
                </S.ListStyled>
            </S.NavStyled>
        </S.HeaderStyled>
    )
}

export default Header;