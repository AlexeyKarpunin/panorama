
import Head from 'next/head'
import Header from '../components/Header';
import Price from '../components/Price';
import Reviews from '../components/Reviews';
import Measure from '../components/Measure';
import Map from '../components/Map';
import Footer from '../components/Footer';

import GlazingPageBanner from '../components/banners/GlazingPageBanner'

import Necessity from '../components/glazing--page/Necessity';
import Decision from '../components/glazing--page/Decision';
import Advantages from '../components/glazing--page/Advantages';
import Portfolio from '../components/Portfolio';


export default function Glazing () {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Остекление балконов, лоджий, Квартир, домов и коттеджей в Астрахани.' />
        <title>Остекление и установка окон в Астрахани</title>
      </Head>

      <Header />
      <GlazingPageBanner />
      <Necessity />
      <Decision />
      <Advantages />
      <Portfolio />
      <Price />
      <Reviews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}