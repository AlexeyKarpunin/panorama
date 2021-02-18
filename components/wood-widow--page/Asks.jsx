export default function Asks () {
  return (
    <section className='select-wood'>
      <div className='container'>
        <p className='select-wood__title'>
          Решили поставить
          {' '}
          <span className='banner__text_red'>деревянные окна?</span>
        </p>
        <span className='select-wood__subtitle'>Вам нужно знать несколько вещей!</span>
        <ul className='select-wood__list'>
          <li className='select-wood__item'>Какие бывают?</li>
          <li className='select-wood__item select-wood__item--yellow'>Из чего они состоят?</li>
          <li className='select-wood__item'>Основные отличия?</li>
          <li className='select-wood__item select-wood__item--yellow'>Как правильно выбрать?</li>
        </ul>
      </div>
    </section>
  )
}