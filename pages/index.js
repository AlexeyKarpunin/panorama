import Head from 'next/head'
import Header from '../components/Header';
import MainPageBanner from '../components/banners/MainPageBanner';
import ChangeWindow from '../components/main--page/ChangeWindows';
import DonNotKnow from '../components/main--page/DoNotKnowWhatChoose';
import TwentyYears from '../components/main--page/TwentyYears';
import Catalog from '../components/main--page/Catalog';
import Price from '../components/Price';
import AboutComponi from '../components/AboutComponi';
import Revews from '../components/Reviews';
import Measure from '../components/Measure';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>

      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Мы устанавливаем и изготавливаем окна в Астрахани на заказ уже более 20 лет. Нас ценят за надежность и качество. Мы работаем всегда в срок, без простоев.' />
        <title>Установка и производство  окон в Астрахани </title>
      </Head>

      <Header />
      <MainPageBanner />
      <ChangeWindow />
      <DonNotKnow />
      <TwentyYears />
      <Catalog />
      <Price />
      <AboutComponi />
      <Revews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}
