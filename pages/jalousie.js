import Head from 'next/head';
import JalousieBanner from '../components/banners/JalousiePageBanner';
import Header from '../components/Header';
import Advantages from '../components/jalousie--page/Advantages';
import Constructor from '../components/jalousie--page/Constructor';


import Reviews from '../components/Reviews';
import Measure from '../components/Measure';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function Jalousie () {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Богатый выбор жалюзи и рольштор, под любые размеры и на любой вкус и цвет в Астрахани.' />
        <title>Купить жалюзи или рольшторы в Астрахани.</title>
      </Head>
      <Header />
      <JalousieBanner />
      <Advantages />
      <Constructor />
      <Reviews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}