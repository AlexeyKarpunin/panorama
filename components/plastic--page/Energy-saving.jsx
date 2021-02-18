export default function EnergySaving () {
  return (
    <section className='adv1' data-page='plastic'>
      <div className='adv1__content container'>
        <h2 className='adv1__title'>
          <span className='adv1__title--span'>01</span>
          {' '}
          Энергосбережение
        </h2>

        <h3 className='adv1__subtitle adv1__subtitle--yellow'>Экономия летом</h3>
        <ul className='adv1__list'>
          <li className='adv1__item'>
            <h3 className='adv1__item-title'>Защита от жары и ультрафиолета</h3>
            <p className='adv1__item-text'>
              Отсекает невидимую часть спектра - ультрафиолетовое (УФ) и инфракрасное излучение
            </p>
          </li>
          <li className='adv1__item'>
            <h3 className='adv1__item-title'>Функция «Солнцезащита»</h3>
            <p className='adv1__item-text'>
              Отражает солнечное излучение, вызывающее нагрев помещения до 2 раз эффективнее, чем обычные стеклопакеты
            </p>
          </li>
        </ul>
        <h3 className='adv1__subtitle adv1__subtitle--black'>Экономия зимой</h3>

        <ul className='adv1__list'>

          <li className='adv1__item'>
            <h3 className='adv1__item-title'>Функция «Энергосбережение»</h3>
            <p className='adv1__item-text'>
              Мультифункциональное стекло сохраняет тепло в помещении до 2 раз эффективнее, чем обычные стеклопакеты
            </p>
          </li>

          <li className='adv1__item'>
            <h3 className='adv1__item-title'>Функция «Антиконденсат»</h3>
            <p className='adv1__item-text'>
              Композитная терморамка с теплопроводностью в 1000 раз ниже алюминиевой защищает окно от промерзация и образования конденсата
            </p>
          </li>
        </ul>
        <ul className='circle__list'>
          <li className='circle__item'>
            <p className='circle__proc'>
              до 57%
            </p>
            <p className='circle__text'>экономия на охлаждении</p>
          </li>
          <li className='circle__item circle__item--2'>
            <p className='circle__proc'>
              до 45%
            </p>
            <p className='circle__text'>экономия на отоплении</p>
          </li>
        </ul>
      </div>
    </section>
  )
}