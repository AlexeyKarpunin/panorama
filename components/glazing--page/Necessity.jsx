export default function Necessity () {
  return (
    <section className='glass1'>
      <div className='glass1__wrap1'>
        <div className='glass1__wrap2'>
          <picture>
            <source srcSet='/img/glass21.webp' type='image/webp' />
            <img className='glass1__img' src='/img/glass21.png' width='' height='' alt='man' />
          </picture>
          <p className='glass1__title'>Вам необходимо застеклить</p>
          <p className='glass1__text'>балкон, лоджию, квартиру или&nbsp;коттедж</p>
          <ul className='glass1__list'>
            <li className='glass1__item'>
              <picture>
                <source srcSet='/img/glass1.webp' type='image/webp' />
                <img src='/img/glass1.jpg' width='325' height='183' alt='балкон' />
              </picture>
            </li>
            <li className='glass1__item'>
              <picture>
                <source srcSet='/img/glass2.webp' type='image/webp' />
                <img src='/img/glass2.jpg' width='325' height='183' alt='лоджия' />
              </picture>
            </li>
            <li className='glass1__item'>
              <picture>
                <source srcSet='/img/glass3.webp' type='image/webp' />
                <img src='/img/glass3.jpg' width='325' height='183' alt='квартира' />
              </picture>
            </li>
            <li className='glass1__item'>
              <picture>
                <source srcSet='/img/glass4.webp' type='image/webp' />
                <img src='/img/glass4.jpg' width='325' height='183' alt='коттедж' />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}