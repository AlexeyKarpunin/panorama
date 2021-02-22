import { useSelector } from 'react-redux';

export default function AluminumBanner () {
  const city = useSelector( state => state.city.city);

  return (
    <section className='banner banner--al' data-page='Страница `Алюминиевые конструкции`'>
      <div className='banner__content'>
        <h1 className='banner__title'>Алюминиевые конструкции. Купить в {city === 'Astrakhan' ? 'Астрахани' : 'Атырау'}</h1>
        <h2 className='banner__text banner__text2'>
          Функциональное и надежное решение
          <br />
          {' '}
          для офиса и загородного дома
        </h2>
        <a className='banner__btn' href='#price'>Узнать стоимость</a>
      </div>
    </section>
  )
}