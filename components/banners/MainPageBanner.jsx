import { useSelector } from 'react-redux';

export default function MainPageBanner () {
  const city = useSelector( state => state.city.city);
  
  return (
    <section className='banner banner--new' data-page='Главная страница'> 
      <div className='banner__content'>
        <h1 className='banner__title'>
          Собственное 
          {' '}
          <span>производство</span>
          {' '}
          окон в {city === 'Astrakhan' ? 'Астрахани' : 'Атырау'}
        </h1>
        <h2 className='banner__text'>Качество и надежность гарантируем</h2>
        <a className='banner__btn' href='#price'>Узнать стоимость</a>
      </div>
    </section> 
  );
}