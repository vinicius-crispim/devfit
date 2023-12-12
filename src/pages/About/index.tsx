import Description from "./Description";
import Features from "./Features";
import featuresList from './data.json'
const About = () => {
    return (
        <>
            <Description/>
            <Features featuresList={featuresList}/>
        </>
    )
}

export default About;