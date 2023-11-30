import Title from "../../../components/Title"
import * as S from './style';
import { IoIosSearch } from "react-icons/io";
import React, { useEffect } from 'react';
import { Suplement } from '../../../types/suplement';
import { useState } from 'react';
import { log } from "console";

interface SuplementProps {
    suplements: Suplement[];
}
export const Suplements: React.FC<SuplementProps> = ({ suplements }) => {
    const [searchSup, setSearchSup] = useState('');
    const [showAll, setShowAll] = useState(false);
    const [showSuplements, setShowSuplements] = useState<Suplement[]>([]);

    function findSup(name: string) {
        const regex = new RegExp(searchSup, 'i');
        return regex.test(name);
    }

    useEffect(() => {
        setShowSuplements([]);
        const btn = document.getElementById('btn') as HTMLButtonElement;
        if (searchSup === '') {
            showQtd(showAll, suplements, setShowSuplements, btn);
        } else {
            setShowSuplements(suplements.filter(item => findSup(item.name)));
            btn.style.display = 'none';
        }



        console.log(showSuplements.filter(item => findSup(item.name)))
    }, [showAll, searchSup])

    return (
        <S.SuplementSection>
            <Title>Suplementos</Title>
            <S.ParagraphStyled>Revendemos suplementos, adquira direto conosco!</S.ParagraphStyled>
            <S.InputStyled>
                <input placeholder="Buscar" type="text" id="searchInput" onChange={
                    (event) => setSearchSup(event.target.value)
                } />
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
            <S.ShowMoreBtn id="btn" onClick={() => {
                setShowAll(!showAll);
                console.log(showAll);
            }}>
                {showAll ? 'Ver menos' : 'Ver mais'}
            </S.ShowMoreBtn>
        </S.SuplementSection>
    )
}

function showQtd(showAll: boolean, suplements: Suplement[], setShowSuplements: React.Dispatch<React.SetStateAction<Suplement[]>>, btn:HTMLButtonElement) {
    if (showAll === true) {
        for (let x = 0; x < suplements.length; x++) {
            let sup: Suplement = suplements[x];
            setShowSuplements(current => [...current, sup]);
        }
    } else {
        for (let x = 0; x < 3; x++) {
            let sup: Suplement = suplements[x];
            setShowSuplements(current => [...current, sup]);
        }
    }
    btn.style.display = 'block';
}
