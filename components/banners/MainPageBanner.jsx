export default function MainPageBanner () {
  return (
    <section className='banner banner--new' data-page='Главная страница'> 
      <div className='banner__content'>
        <h1 className='banner__title'>
          Собственное 
          {' '}
          <span>производство</span>
          {' '}
          окон в Астрахани
        </h1>
        <h2 className='banner__text'>Качество и надежность гарантируем</h2>
        <a className='banner__btn' href='#price'>Узнать стоимость</a>
      </div>
    </section> 
  );
}