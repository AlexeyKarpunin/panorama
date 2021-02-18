import Head from 'next/head';
import Header from '../components/Header';

import WoodBanner from '../components/banners/WoodPageBanner'

import Asks from '../components/wood-widow--page/Asks';
import WoodSpecies from '../components/wood-widow--page/Wood-species';
import Advantages from '../components/wood-widow--page/Advantages';
import Material from '../components/wood-widow--page/Material';
import Produce from '../components/wood-widow--page/Produce';

import Price from '../components/Price';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Measure from '../components/Measure';
import Map from '../components/Map';
import Footer from '../components/Footer';

export default function WoooWindows () {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Купить деревянные окна трех пород, дуб, лиственница, сосна в Астрахани. Собственное производство, установка' />
        <title>Установка деревянных окон в Астрахани. Собсвенное производство.</title>
      </Head>

      <Header />
      <WoodBanner />
      <Asks />
      <WoodSpecies />
      <Advantages />
      <Material />
      <Produce />
      <Price />
      <Portfolio />
      <Reviews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}