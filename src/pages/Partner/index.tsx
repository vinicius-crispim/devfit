import { Benefit } from '../../types/benefit';
import Banner from './Banner'
import Benefits from './Benefits';
import GymMachines from '../../assets/benefits/gym-machines.jpg'
import GymEnvironment from '../../assets/benefits/gym-environment.jpg'
import GymFacade from '../../assets/benefits/gym-facade.jpg'
import GymSocialMedias from '../../assets/benefits/gym-social-medias.jpg'
import GymSupport from '../../assets/benefits/gym-support.jpg'
import GymApp from '../../assets/benefits/gym-app.jpg'

const benefitsList:Benefit[] = [
    {
        id: 1,
        name: "Equipamentos Novos e de Qualidade",
        description: "Nossas franquias terão os melhores equipamentos disponíveis para que seus alunos consigam usufruir da melhor maneira possível e se desenvolver mais rápido e com mais segurança.",
        image: GymMachines
    },
    {
        id: 2,
        name: "Ambiente Moderno e Acolhedor",
        description: "Uma boa academia não se faz somente com equipamentos de qualidade, acreditamos que é fundamental a ambientação do local, por isso proporcionamos um ambiente excelente para todos.",
        image: GymEnvironment
    },
    {
        id: 3,
        name: "Auxílio na Escolha de Localização",
        description: "A equipe da DevFit também oferece um suporte na escolha da sua localização ideal para a academia, considerando fatores como demografia, concorrência e potencial de crescimento mais rápido.",
        image: GymFacade
    },
    {
        id: 4,
        name: "Projetos de Marketing Nacional",
        description: "Realizamos campanhas de marketing em nível nacional, gerando visibilidade e atraindo clientes para todas as franquias. Incluimos estratégias online e publicidade tradicional.",
        image: GymSocialMedias
    },
    {
        id: 5,
        name: "Suporte Contínuo e Muito Eficiente",
        description: "Oferecemos suporte contínuo em termos de gestão financeira, recursos humanos e atualizações de mercado, garantindo que os franqueados estejam sempre alinhados com as melhores práticas do setor",
        image: GymSupport
    },
    {
        id: 5,
        name: "Acesso a Tecnologia Inovadora",
        description: "Oferecemos acesso a plataformas tecnológicas inovadoras, como aplicativos de treino personalizado, monitoramento de desempenho e programas de fidelidade.",
        image: GymApp
    }
    
]
const Partner = () => {
    return (
        <>
            <Banner/>
            <Benefits benefitsList={benefitsList}/>
        </>
    )
}

export default Partner;