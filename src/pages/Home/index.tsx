import Slider from "./Slider";
import Banner1 from '../../assets/promo-banner-1.png';
import Banner2 from '../../assets/promo-banner-2.png';
import Banner3 from '../../assets/promo-banner-3.png';
import Table from "./Table";

export const Home = () => {
  const images = [
    Banner1,
    Banner2,
    Banner3
  ];
  return (
    <>
      <Slider images={images} interval={5000} />
      <Table />
    </>
  )
}

export default Home;
