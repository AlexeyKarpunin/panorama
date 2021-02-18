export default function NoizeKiller () {
  return (
    <section className='adv2'>
      <div className='container'>
        <div className='adv2__content'>
          <h2 className='adv2__title'>
            <span className='adv2__title--span'>02</span>
            {' '}
            Шумоизоляция
          </h2>
          <p className='adv2__text-square'>Шум остается за окном</p>
          <p className='adv2__text'>
            <span className='adv2__text--span'>на 25%	ЛУЧШЕ</span>
            {' '}
            защита от шума
          </p>
        </div>
        <h3 className='adv2__formula-title'>Формула спокойного отдыха от «Панорама»</h3>

        <div className='adv2__formula'>
          <div className='adv2__formula-block adv2__formula-block--1'>
            <p className='adv2__formula-db'>75 дБ</p>
            <p className='adv2__formula-text'>Уровень шума	6&nbsp;полосной автострады</p>
          </div>
          <div className='adv2__formula-block adv2__formula-block--2'>
            <p className='adv2__formula-db'>40 дБ</p>
            <p className='adv2__formula-text'>Уровень	звукоизоляции	окна «Панорама»</p>
          </div>
          <div className='adv2__formula-block adv2__formula-block--3'>
            <p className='adv2__formula-db'>35 дБ</p>
            <p className='adv2__formula-text'>Допустимый нормами	звуковой фон во время	сна</p>
          </div>
        </div>

        <div className='heat__diff'>
          <h3 className='heat__diff-title heat__diff-title--adv2'>Коэффициент шумоизоляции К/Вт</h3>

          <ul className='heat__diagram-list'>
            <li className='heat__diagram-item'>
              <span className='heat__diagram-title'>Панорама</span>
              <div className='heat__diagram' />
              <span className='heat__diagram-data'>33 / 36</span>
            </li>
            <li className='heat__diagram-item'>
              <span className='heat__diagram-title'>Обычный стеклопакет</span>
              <div className='heat__diagram heat__diagram--2' />
              <span className='heat__diagram-data'>29 / 30</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}