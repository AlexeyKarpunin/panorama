import Head from 'next/head'
import Header from '../components/Header';
import MainPageBanner from '../components/banners/MainPageBanner';
import ChangeWindow from '../components/main--page/ChangeWindows';
import DonNotKnow from '../components/main--page/DoNotKnowWhatChoose';
import TwentyYears from '../components/main--page/TwentyYears';

export default function Home() {
  return (
<>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainPageBanner />
      <ChangeWindow />
      <DonNotKnow />
      <TwentyYears />
</>
  )
}
