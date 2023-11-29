import Title from "../../../components/Title"
import * as S from './style';
import { IoIosSearch } from "react-icons/io";
import React from 'react';
import { Suplement } from "../../../types/suplement";

interface SuplementProps {
    suplements: Suplement[];
}
export const Suplements: React.FC<SuplementProps> = ({ suplements }) => {
    return (
        <S.SuplementSection>
            <Title>Suplementos</Title>
            <S.ParagraphStyled>Revendemos suplementos, adquira direto conosco!</S.ParagraphStyled>
            <S.SuplementsContainer>
                <S.InputStyled>
                    <input placeholder="Buscar" type="text" />
                    <IoIosSearch className="inputIcon" />
                </S.InputStyled>
                <S.SuplementsList>
                    {
                        suplements.map((suplement, index) => {
                            return (
                                <S.SuplementItem>
                                    <div>
                                        <img src={suplement.image} alt={suplement.name} />
                                    </div>
                                    <div>
                                        <h3>{suplement.name}</h3>
                                        <p>{suplement.description}</p>
                                        <span>R${suplement.price}</span>
                                    </div>
                                </S.SuplementItem>
                            );
                        })
                    }
                </S.SuplementsList>
            </S.SuplementsContainer>
        </S.SuplementSection>
    )
}