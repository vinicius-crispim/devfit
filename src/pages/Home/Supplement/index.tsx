import Title from "../../../components/Title"
import * as S from './style';
import { IoIosSearch } from "react-icons/io";

export const Suplement = () => {
    return (
        <S.SuplementSection>
            <Title>Suplementos</Title>
            <S.ParagraphStyled>Adquira suplementos conosco!</S.ParagraphStyled>
            <S.SuplementsContainer>
                <S.InputStyled>
                    <input placeholder="Buscar" type="text" />
                    <IoIosSearch className="inputIcon"/>
                </S.InputStyled>
                <S.SuplementsList>
                    <li>aa</li>
                    <li>aa</li>
                    <li>aa</li>
                    <li>aa</li>
                    <li>aa</li>
                </S.SuplementsList>
            </S.SuplementsContainer>
        </S.SuplementSection>
    )
}