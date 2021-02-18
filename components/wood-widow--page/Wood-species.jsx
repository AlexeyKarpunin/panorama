export default function WoodSpecies() {
  return (
    <section className='wood-tips'>
      <div className='wood-tips__content'>
        <h2 className='wood-tips__title'>
          Мы используем
          {' '}
          <span className='banner__text_red'>3&nbsp;породы</span>
          {' '}
          дерева
        </h2>
        <ul className='wood-tips__list'>
          <li className='wood-tips__item'>
            <div className='wood-tips__img-box'>
              <img className='wood-tips__img' src='/img/sosna.png' width='310' height='170' alt='Сосна' />
            </div>
            <div className='wood-tips__text-box'>
              <h3 className='wood-tips__card-title'>Сосна</h3>
              <p className='wood-tips__card-text'>
                Окна из сосны из-за невысокой плотности древесины можно назвать естественным кондиционером, который способен обеспечить комфортный уровень воздухообмена в Вашем доме.
              </p>
            </div>
          </li>
          <li className='wood-tips__item wood-tips__item--listvenica'>
            <div className='wood-tips__img-box'>
              <img className='wood-tips__img' src='/img/listvenica.png' width='289' height='170' alt='Лиственница' />
            </div>
            <div className='wood-tips__text-box'>
              <h3 className='wood-tips__card-title'>Лиственница</h3>
              <p className='wood-tips__card-text'>
                Окна из лиственницы обладают высокой плотностью. Эта порода дерева не боится влаги. Окна из лиственницы легко переносят перепады температур, стойки к гниению и к грибку за счёт природного антисептика в своём составе.
              </p>
            </div>
          </li>
          <li className='wood-tips__item'>
            <div className='wood-tips__img-box'>
              <img className='wood-tips__img wood-tips__img--dub' src='/img/dub.png' width='221' height='239' alt='Дуб' />
            </div>
            <div className='wood-tips__text-box'>
              <h3 className='wood-tips__card-title wood-tips__card-title--dub'>Дуб</h3>
              <p className='wood-tips__card-text'>
                Окна из дуба - это прекрасное решение для вашего дома. Древесина дуба содержит дубильные вещества, которые значительно продлевают срок службы окон, делают окна устойчивыми к биологическому воздействию, влаге и истиранию.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}