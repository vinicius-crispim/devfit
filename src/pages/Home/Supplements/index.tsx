import Title from "../../../components/Title"
import * as S from './style';
import { IoIosSearch } from "react-icons/io";
import React, { useEffect } from 'react';
import { Suplement } from '../../../types/suplement';
import { useState } from 'react';

interface SuplementProps {
    suplements: Suplement[];
}
export const Suplements: React.FC<SuplementProps> = ({ suplements }) => {
    const [showAll, setShowAll] = useState(false);
    const [showSuplements, setShowSuplements] = useState<Suplement[]>([])
    useEffect(() => {
        setShowSuplements([]);
        if (showAll === true) {
            for (let x = 0; x < suplements.length; x++) {
                let sup: Suplement = suplements[x]
                setShowSuplements(current => [...current, sup])
            }
        } else {
            for (let x = 0; x < 3; x++) {
                let sup: Suplement = suplements[x]
                setShowSuplements(current => [...current, sup])
            }
        }
    }, [showAll, suplements])

    return (
        <S.SuplementSection>
            <Title>Suplementos</Title>
            <S.ParagraphStyled>Revendemos suplementos, adquira direto conosco!</S.ParagraphStyled>
                <S.InputStyled>
                    <input placeholder="Buscar" type="text" />
                    <IoIosSearch className="inputIcon" />
                </S.InputStyled>
            <S.SuplementsContainer>
                <S.SuplementsList>
                    {
                        showSuplements.map((suplement, index) => {
                            return (
                                <S.SuplementItem key={index}>
                                    <img src={suplement.image} alt={suplement.name} />
                                    <div>
                                        <h3>{suplement.name} - <span>R${suplement.price}</span></h3>
                                        <div>
                                        <p>{suplement.description}</p>
                                        </div>
                                    </div>
                                </S.SuplementItem>
                            );
                        })
                    }
                </S.SuplementsList>
            </S.SuplementsContainer>
                <S.ShowMoreBtn onClick={() => {
                    setShowAll(!showAll);
                    console.log(showAll);
                }}>
                    {showAll ? 'Ver menos' : 'Ver mais'}
                </S.ShowMoreBtn>
        </S.SuplementSection>
    )
}