import { useSelector } from 'react-redux';

export default function WoooBanner () {
  const city = useSelector( state => state.city.city);

  return (
    <section className='banner banner--page2' data-page='Страница `Деревянные окна`'>
      <div className='banner__content'>
        <h1 className='banner__title banner__title--page2'>
          Деревянные 
          {' '}
          <span className='banner__text_red'>окна.</span>
          <br />
          Экологичность природного материала заказать в {city === 'Astrakhan' ? 'Астрахани' : 'Атырау'}
        </h1>
        <h2 className='banner__text banner__text--page2'>
          надежные, удобные, практичные
          <br />
          создают особую атмосферу
        </h2>
        <a className='banner__btn' href='#price'>Узнать стоимость</a>
      </div>
    </section>
  )
}