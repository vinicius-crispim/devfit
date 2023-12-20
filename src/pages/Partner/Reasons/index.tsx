import * as S from './style'
import Graph from '../../../assets/graph.jpg'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import Title from '../../../components/Title';

const Reasons = () => {
    return (
        <S.ReasonsStyled>
            <Title>Embarque na Era Fitness!</Title>
            <S.ReasonsContainerStyled>

                <S.ImgContainer>

                    <img src={Graph} alt="Gráfico com uma flecha verde crescendo" />
                </S.ImgContainer>
                <S.ReaonsList>
                    <li>
                        <S.IconContainer>
                            <IconContext.Provider value={{ style: { height: '30px', width: '30px' } }}>
                                <FaArrowTrendUp />
                            </IconContext.Provider>
                        </S.IconContainer>
                        <p>O setor veio de um cenário de crescimento que atingiu o faturamento de US$ 2,1 bilhões anualmente.</p>
                    </li>
                    <li>
                        <S.IconContainer>
                            <IconContext.Provider value={{ style: { height: '30px', width: '30px' } }}>
                                <FaArrowTrendUp />
                            </IconContext.Provider>
                        </S.IconContainer>
                        <p>A cada dia que passa as pessoas estão ficando mais precupadas com a saúde.</p>
                    </li>
                    <li>
                        <S.IconContainer>
                            <IconContext.Provider value={{ style: { height: '30px', width: '30px' } }}>
                                <FaArrowTrendUp />
                            </IconContext.Provider>
                        </S.IconContainer>
                        <p>O faturamento de uma academia de médio porte é de 50 mil por mês em média, com 20% de margem de lucro.</p>
                    </li>
                    <li><S.IconContainer>
                        <IconContext.Provider value={{ style: { height: '30px', width: '30px' } }}>
                            <FaArrowTrendUp />
                        </IconContext.Provider>
                    </S.IconContainer>
                        <p>A arreacadação do mercado representa cerca de 3% da indústria de serviços brasileira e 0,13% do PIB nacional.</p>
                    </li>
                </S.ReaonsList>
            </S.ReasonsContainerStyled>
        </S.ReasonsStyled>
    )
}

export default Reasons;