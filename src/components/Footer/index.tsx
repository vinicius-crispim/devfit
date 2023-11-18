import * as S from "./style"
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Logo from '../../assets/Logo.png'

export const Footer = () => {
    return (
        <S.FooterStyled>
            <div>
                <img src={Logo} alt="DevFit" />
            </div>
            <div>
                <h3>Siga a DevFit nas redes!</h3>
                <S.SocialMediaStyled>
                    <FaInstagram className="icone" />
                    <BsFacebook className="icone" />
                    <BsTwitter className="icone" />
                </S.SocialMediaStyled>
            </div>
        </S.FooterStyled>
    )
}

export default Footer;