import Slider from "./Slider";
import Banner1 from '../../assets/promo-banner-1.png';
import Banner2 from '../../assets/promo-banner-2.png';
import Banner3 from '../../assets/promo-banner-3.png';
import Arginine from '../../assets/suplements/Arginine.png';
import BCAA from '../../assets/suplements/BCAA.png';
import BetaAlanine from '../../assets/suplements/Beta-alanine.png';
import Creatine from '../../assets/suplements/Creatine_monohydrate.png';
import Glutamine from '../../assets/suplements/Glutamine.png';
import Multivitamin from '../../assets/suplements/Multivitamin.png';
import PreWorkout from '../../assets/suplements/pre-workout.png';
import Whey from '../../assets/suplements/Whey.png';
import Machine from '../../assets/machines-1.png'
import Dance from '../../assets/dancing.png'
import CadeiraMassagem from '../../assets/cadeira-massagem.png'
import Plans from './Plans'
import { Card } from '../../types/plansCard';
import { Suplements } from "./Supplements";
import { Suplement } from "../../types/suplement";
export const Home = () => {
  const images = [
    Banner1,
    Banner2,
    Banner3
  ];

  const cards: Card[] = [
    {
      title: 'Plano Intemediário',
      description: 'Utilize uma unidade das nossas academia a qualquer hora do dia, plano incluindo apenas musculação e maquinas de cardio',
      price: 'R$89,90',
      image: Machine
    },
    {
      title: 'Plano intermediário',
      description: 'Utilize uma de nossas unidades e tenha acesso ao aplicativo a qualquer hora do dia, plano incluindo todas as maquinas e fitdance',
      price: 'R$99,90',
      image: Dance
    },
    {
      title: 'Plano Premium',
      description: 'Tenha acesso a qualquer uma de nossas academias, treine com um amigo e utilize nossas cadeiras de massagem',
      price: 'R$129,90',
      image: CadeiraMassagem
    },
  ]

  const suplements: Suplement[] = [
    {
      name: 'Arginina',
      description: `A arginina é um aminoácido essencial que desempenha várias funções 
      no organismo. Este suplemento tem como objetivo produzir de óxido nítrico, proporcionar
      desempenho atlético, recuperação muscular, estimular o crescimento muscular 
      e saúde sexual.`,
      image: Arginine,
      price: '80.90'
    },
    {
      name: 'BCAA',
      description: `Conjunto de aminoácidos essenciais cruciais para a síntese 
      de proteínas, promovendo o crescimento muscular, recuperação e prevenção do 
      catabolismo. BCAA melhora a resistência, reduz a fadiga durante o exercício e 
      melhora o desempenho.`,
      image: BCAA,
      price: '95,00'
    },
    {
      name: 'Beta-Alanina',
      description: `A beta-alanina é um aminoácido não essencial que, quando ingerido, 
      aumenta os níveis de carnosina nos músculos. A carnosina ajuda a 
      reduzir a fadiga muscular durante exercícios de alta intensidade, 
      melhorando o desempenho atlético.`,
      image: BetaAlanine,
      price: '74,50'
    },
    {
      name: 'Creatina',
      description: `A creatina é um composto natural encontrado nos músculos, 
      desempenha um papel crucial na produção de ATP, a principal fonte de energia 
      celular. Proporciona melhor desempenho e ganho de massa muscular, além de 
      trazer benefícios a saúde cerebral.`,
      image: Creatine,
      price: '99,00'
    },
    {
      name: 'Glutamina',
      description: `Este aminoácido desempenha um papel vital na saúde intestinal, 
      no sistema imunológico e na síntese proteica, pode ajudar na recuperação 
      muscular, reduzir a fadiga e fortalecer o sistema imunológico, especialmente 
      em períodos de treinamento intenso.`,
      image: Glutamine,
      price: '55,00'
    },
    {
      name: 'Multivitamínico',
      description: `Multivitamínicos são suplementos que combinam várias vitaminas e 
      minerais essenciais. Projetados para complementar a dieta, ajudam a prevenir 
      deficiências nutricionais e promovem a saúde geral, fornecendo suporte ao 
      sistema imunológico e outros aspectos do bem-estar.`,
      image: Multivitamin,
      price: '50,00'
    },
    {
      name: 'Pré-treino',
      description: `Suplementos pré-treino são fórmulas que visam melhorar o desempenho durante o 
      exercício, incluindo ingredientes como cafeína e aminoácidos. Populares para 
      aumentar energia e concentração, é essencial usar com moderação e buscar 
      orientação profissional antes do uso.`,
      image: PreWorkout,
      price: '96,00'
    },
    {
      name: 'Whey',
      description: `Whey protein é um suplemento proteico extraído do soro do leite,  
      possui rápida absorção e perfil completo de aminoácidos, é eficaz para promover 
      crescimento muscular e recuperação pós-exercício, atende às necessidades
      proteicas de maneira versátil.`,
      image: Whey,
      price: '112,00'
    },
  ]

  return (
    <>
      <Slider images={images} interval={5000} />
      <Plans cards={cards} />
      <Suplements suplements={suplements} />
    </>
  )
}

export default Home;
