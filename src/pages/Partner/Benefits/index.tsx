import Title from '../../../components/Title';
import { Benefit } from '../../../types/benefit'
import * as S from './style'


interface BenefitsProps {
    benefitsList: Benefit[];
}


const Benefits: React.FC<BenefitsProps> = ({ benefitsList }) => {
    return (
        <S.BenefitsContainer>
            <Title>Benefícios de ser nosso parceiro!</Title>
            <S.BenefitsList>
                {
                    benefitsList.map(benefit => {
                        return (
                            <li  key={benefit.id}>
                                < S.BenefitsCard>
                                    <img src={benefit.image} alt={benefit.name} />
                                    <h3>{benefit.name}</h3>
                                    <div className="plan-info">
                                        <p>{benefit.description}</p>
                                    </div>
                                </S.BenefitsCard>
                            </li>
                        )
                    })
                }
            </S.BenefitsList>
        </S.BenefitsContainer >
    )
}

export default Benefits;