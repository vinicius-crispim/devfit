import Logo from '../../assets/Logo.png'
import * as S from './style';
import Links from './data.json'
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.HeaderStyled>
            <h1><Link to="/"><img src={Logo} alt="DevFit" /></Link></h1>
            <S.NavStyled>
                <S.MenuBtn $isOpen={isOpen} onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                    <IoIosMenu className='icone' />
                </S.MenuBtn>
                <S.ListStyled $isOpen={isOpen}>
                    {
                        Links.map((link: typeof Links[1], index: number) => {
                            return (
                                <li key={index}>
                                    <Link to={link.link}>
                                        {link.titulo}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </S.ListStyled>
            </S.NavStyled>
        </S.HeaderStyled>
    )
}

export default Header;