import { useSelector } from 'react-redux';

export default function GlazingBanner () {
  const city = useSelector( state => state.city.city);

  return (
    <section className='banner banner--glass' data-page='Страница `Остекление`'>
      <div className='banner__glass-text'>
        <h1 className='banner__title banner__title--glass'>Остекление в {city === 'Astrakhan' ? 'Астрахани' : 'Атырау'}</h1>
        <h2 className='banner__text2'>Балконов, лоджий, квартир, домов и коттеджей</h2>
        <a className='banner__btn banner__btn--glass' href='#price'>Узнать стоимость</a>
      </div>
    </section>
  )
  
}