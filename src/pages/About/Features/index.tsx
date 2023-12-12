import { Feature } from '../../../types/features';
import * as S from './style';

interface FeaturesProps {
    featuresList: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ featuresList }) => {
    console.log(featuresList)
    return (
        <S.FeaturesContainer>
            <S.FeaturesList>
                {featuresList.map(feature => {

                    return (
                        <S.FeaturesList_Item key={feature.id} $direction={feature.id % 2 === 0}>
                            <div>

                                <h3>{feature.title}</h3>
                            </div>
                            <p>
                                {feature.description}
                            </p>
                        </S.FeaturesList_Item>
                    )
                })}
            </S.FeaturesList>
            <S.FinalParagraph>
                Junte-se à DevFit e descubra uma abordagem única para o fitness, 
                onde o desenvolvimento pessoal e a saúde se encontram. Estamos 
                ansiosos para ser parte da sua jornada para uma vida mais 
                equilibrada e realizada. <span>DevFit - Transforme-se, Supere-se!</span>
            </S.FinalParagraph>
        </S.FeaturesContainer>
    )
}

export default Features;