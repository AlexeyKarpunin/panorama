export default function AdressToUS () {
  return (
    <section className='glass2'>
      <div className='glass2__content'>
        <div className='glass2__text-box'>
          <h2 className='glass2__title'>
            <span>Но не знаете</span>
            {' '}
            куда&nbsp;лучше обратиться?
          </h2>
          <p className='glass2__text'>Что бы все и сразу, в одном месте, и без лишней суеты.</p>
          <p className='glass2__text glass2__text--2'>Где лучшее соотношение цены&nbsp;и&nbsp;качества?</p>
          <p className='glass2__text glass2__text--3'>и качество на много лет</p>
          <picture>
            <source srcSet='/img/glass8.webp' type='image/webp' />
            <img className='glass2__img' src='/img/glass8.png' alt='' />
          </picture>
        </div>
      </div>
    </section>
  )
}