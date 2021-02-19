export default function PlasticBanner () {
  return (
    <section className='banner banner--new banner--plastic' data-page="Страница 'Пластиковые окна'">
      <div className='banner__content'>
        <h1 className='banner__title'>
          Пластиковые окна 
          {' '}
          <span>
            <br />
            от «Панорамы»
          </span>
          {' '}
          в Астрахани
        </h1>
        <ul className='banner__list'>
          <li>
            <h2 className='banner__list-title fix--size--22'>Энергосбережение</h2>
            <span>
              Теплосбережение эквивалентно
              <strong>
                <br />
                толщине кирпичной стены
              </strong>
            </span>
          </li>
          <li>
            <h2 className='banner__list-title fix--size--22'>Шумоизоляция</h2>
            <span>
              Снижает шум за окном более
              {' '}
              <strong>чем в 2 раза</strong>
            </span>
          </li>
          <li>
            <h2 className='banner__list-title'>Прочность и безопасность</h2>
            <span>
              Иновационный
              {' '}
              <strong>безопасный</strong>
              {' '}
              стеклопакет от «Панорамы»
            </span>
          </li>
        </ul>
        <div className='banner__btn-box'>
          <a className='banner__btn' href='#price'>Узнать стоимость</a>
          <span className='banner__btn-description'>Узнайте точную стоимость вашего окна за 2 минуты</span>
        </div>
      </div>
    </section>
  )
}