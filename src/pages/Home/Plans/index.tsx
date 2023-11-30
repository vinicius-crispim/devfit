import Title from "../../../components/Title";
import * as S from './style';
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
                        <S.PlanCard key={index}>
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