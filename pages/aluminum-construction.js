import Head from 'next/head';
import Advantages from '../components/aluminum--page/Advantages';
import AluminumInfo from '../components/aluminum--page/AluminiumInfo';
import Views from '../components/aluminum--page/Views';
import Where from '../components/aluminum--page/Where';
import AluminumBanner from '../components/banners/AluminumPagebanner';
import Header from '../components/Header';

import Price from '../components/Price';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Measure from '../components/Measure';
import Map from '../components/Map';
import Footer from '../components/Footer';


export default function AluminumConstraction () {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Остекление балконов, лоджий, Квартир, домов и коттеджей в Астрахани.' />
        <title>Поможем выбрать и установить алюминиевые конструкции любой сложности в Астрахани.</title>
      </Head>

      <Header />
      <AluminumBanner />
      <Advantages />
      <AluminumInfo />
      <Where />
      <Views />
      <Price />
      <Portfolio />
      <Reviews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}