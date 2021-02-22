import Head from 'next/head';
import PlasticBanner from '../../components/banners/PlasticPageBanner';
import Header from '../../components/Header';
import EnergySaving from '../../components/plastic--page/Energy-saving';
import HeatSaving from '../../components/plastic--page/Heat-savinf';
import Why from '../../components/plastic--page/Why';
import NoizeKiller from '../../components/plastic--page/Noize-killer';
import Hardness from '../../components/plastic--page/Hardness';
import Quality from '../../components/plastic--page/Quality';

import Price from '../../components/Price';
import Portfolio from '../../components/Portfolio';
import Reviews from '../../components/Reviews';
import Measure from '../../components/Measure';
import Map from '../../components/Map';
import Footer from '../../components/Footer';

export default function plasticWindow () {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Остекление балконов, лоджий, Квартир, домов и коттеджей в Атырау.' />
        <title>Купить пластиковые окна с отличной шумоизоляцией, прочностью и безопасностью в Атырау.</title>
      </Head>

      <Header />
      <PlasticBanner />
      <Why />
      <EnergySaving />
      <HeatSaving />
      <NoizeKiller />
      <Hardness />
      <Quality />
      <Price />
      <Portfolio />
      <Reviews />
      <Measure />
      <Map />
      <Footer />
    </>
  )
}