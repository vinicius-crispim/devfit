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
                {/* <S.FeaturesList_Item>
                    <h3>TESTE</h3>
                    <p>
                        Bem-vindo à DevFit, sua rede de academias dedicaaaaa, nossas instalações oferecem um ambiente acolhedor e
                        inspirador para atender você da melhor maneira possível.
                    </p>
                </S.FeaturesList_Item>*/}
            </S.FeaturesList>
        </S.FeaturesContainer>
    )
}

export default Features;