import Slider from "./Slider";
import Banner1 from '../../assets/promo-banner-1.png';
import Banner2 from '../../assets/promo-banner-2.png';
import Banner3 from '../../assets/promo-banner-3.png';
import Machine from '../../assets/machines-1.png'
import Dance from '../../assets/dancing.png'
import CadeiraMassagem from '../../assets/cadeira-massagem.png'
import Plans from './Plans'
import { Card } from '../../types/plansCard';
import { Suplement } from "./Supplement";
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

  return (
    <>
      <Slider images={images} interval={5000} />
      <Plans cards={cards} />
      <Suplement />
    </>
  )
}

export default Home;
