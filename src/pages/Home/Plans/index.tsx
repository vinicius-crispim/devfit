import Title from "../../../components/Title";
import * as S from './style';
import Teste from '../../../assets/machines-1.png'
import { Card } from "../../../types/plansCard";

interface PlansProps {
    cards: Card[];
}
export const Plans:React.FC<PlansProps> = ({cards}) => {
    return (
        <S.PlansSection>
            <Title>Nossos Planos</Title>
            <S.PlansContainer>
                {cards.map((card, index) => {
                    return (
                        <S.PlanCard>
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <div className="plan-info">
                                <p>{card.description}</p>
                                <span>{card.price}</span>
                            </div>
                        </S.PlanCard>
                    )
                })}
            </S.PlansContainer>
        </S.PlansSection>
    )
}

export default Plans;