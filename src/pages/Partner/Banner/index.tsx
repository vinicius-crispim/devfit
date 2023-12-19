import Title from '../../../components/Title';
import * as S from './style'
import PartnerImage from '../../../assets/partner-image.png'

const Banner = () => {
    return (
        <S.BannerSection>
            <div>
                <Title>Torne-se um parceiro da DevFit</Title>
                <span>e nos ajude a crescer, evoluir e impactar ainda mais vidas com nosso trabalho!</span>
                <S.ButtonStyled>Quero fazer parte</S.ButtonStyled>
            </div>
            <div>
                <img src={PartnerImage} alt="Atleta feminina em uma academia" />
            </div>
        </S.BannerSection>
    )
}

export default Banner;