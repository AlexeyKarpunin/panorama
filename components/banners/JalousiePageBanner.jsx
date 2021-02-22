import { useSelector } from 'react-redux';

export default function JalousieBanner () {
  const city = useSelector( state => state.city.city);

  return (
    <section className='banner banner--jaluzi' data-page='Страница `Жалюзи`'>
      <div className='banner__content'>
        <h1 className='banner__title'>Купить жалюзи или рольшторы в {city === 'Astrakhan' ? 'Астрахани' : 'Атырау'}</h1>
        <h2 className='banner__text2'>
          Заключительный штрих в создании стиля интерьера
        </h2>
        <a className='banner__btn' href='#constructor'>Подобрать расцветку</a>
      </div>
    </section>
  )
}