import Title from '../../../components/Title'
import * as S from './style'

const Description = () => {
    return (
        <S.DescriptionContainer>
            <Title>
                Sobre nós
            </Title>
            <div>
                <S.ParagraphStyled>
                    Bem-vindo à DevFit, sua rede de academias dedicada a transformar
                    vidas por meio do fitness e do desenvolvimento pessoal. Aqui na
                    DevFit, acreditamos que uma mente e corpo saudáveis são a base para
                    uma vida plena e realizada.
                </S.ParagraphStyled>
                <S.ParagraphStyled>
                    A DevFit não é apenas uma academia, somos uma comunidade comprometida
                    com o seu bem-estar físico e mental, nossas instalações oferecem um ambiente acolhedor e
                    inspirador para atender você da melhor maneira possível.
                </S.ParagraphStyled>
            </div>
        </S.DescriptionContainer>
    )
}

export default Description;