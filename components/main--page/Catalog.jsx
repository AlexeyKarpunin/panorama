/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'

const STATE_NAMES = {
  wood: 'wood',
  woodAluminum: 'wood-aluminum',
  plastic: 'plastic',
  constarction: 'constraction'
}

export default function Catalog () {
  
  const [catalog, setCatalog] = useState(STATE_NAMES.wood);
  const [imgLink, setLink] = useState('/img/full-img1.jpg');

  function leafSlaid(link, catalogName) {
    setCatalog(catalogName);
    setLink(link);
  }

  return (
    <section className='catalog'>
      <div className='catalog__content container'>
        <h2 className='catalog__main-title'>Мы предлагаем</h2>
        <div className='catalog__box'>
          <ul className='catalog__list'>

            <li 
              className={`catalog__item ${catalog === STATE_NAMES.wood ? 'active' : null}`}
              onClick={() => leafSlaid('/img/full-img1.jpg', STATE_NAMES.wood)}
            >
              <img className='catalog__img' src='/img/catitem1.png' alt='Деревянные окна' width='70px' height='140px' />
              <div className='catalog__text-box'>
                <h3 className='catalog__title'>Деревянные окна</h3>
                <p className='catalog__text'>Экологически чистые, они придадут Вашему дому комфорт и уют.</p>
              </div>
            </li>

            <li 
              className={`catalog__item catalog__item--2 ${catalog === STATE_NAMES.woodAluminum ? 'active' : null} `}
              onClick={() => leafSlaid('/img/full-img22.jpg', STATE_NAMES.woodAluminum)}
            >
              <img className='catalog__img catalog__img--2' src='/img/catitem2.png' alt='Дерево-алюминиевые окна' width='74px' height='150px' />
              <div className='catalog__text-box'>
                <h3 className='catalog__title'>Дерево-алюминиевые окна</h3>
                <p className='catalog__text'>Более устойчивые к механическим и атмосферным воздействиям.</p>
              </div>
            </li>

            <li 
              className={`catalog__item ${catalog === STATE_NAMES.plastic ? 'active' : null}`}
              onClick={() => leafSlaid('/img/full-img3.jpg', STATE_NAMES.plastic)}
            >
              <img className='catalog__img catalog__img--3' src='/img/catitem3.png' alt='Пластиковые окна' width='72px' height='150px' />
              <div className='catalog__text-box'>
                <h3 className='catalog__title'>Пластиковые окна</h3>
                <p className='catalog__text'>Цена и надежность, а также удобство и практичность в эксплуатации.</p>
              </div>
            </li>

            <li 
              className={`catalog__item ${catalog === STATE_NAMES.constarction ? 'active' : null}`}
              onClick={() => leafSlaid('/img/full-img2.jpg', STATE_NAMES.constarction)}
            >
              <img className='catalog__img catalog__img--4' src='/img/catitem4.png' alt='Пластиковые окна' width='72px' height='150px' />
              <div className='catalog__text-box'>
                <h3 className='catalog__title'>Алюминиевые конструкции</h3>
                <p className='catalog__text'>Надежные и изящные конструкции способны реализовать любые потребности в остеклении.</p>
              </div>
            </li>

          </ul>
          <img className='catalog__full-img' src={imgLink} width='670px' height='586px' alt='' />
        </div>
      </div>
    </section>
  )
}