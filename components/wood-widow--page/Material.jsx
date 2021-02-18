import { useEffect } from 'react'

export default function Material () {

  useEffect( () => {
      const material = document.querySelector('.material');
      const label = material.querySelectorAll('.material__menu-item');
      const content = material.querySelectorAll('.material__item');
    
      for (let i = 0; i < label.length; i++) {
    
        label[i].addEventListener('click', () => {
          for (let i = 0; i < content.length; i++) {
            content[i].classList.add('material__item--hide');
            label[i].classList.remove('material__menu-item--active');
          }
          content[i].classList.remove('material__item--hide');
          label[i].classList.add('material__menu-item--active');
        });
      };

  }, [])
  return (
    <section className='material'>
      <div className='material__content container'>
        <h2 className='material__title'>
          Материалы и
          <span className='banner__text_red'>технологии</span>
        </h2>
        <div className='material__menu'>
          <p className='material__menu-item material__menu-item--active'>
            Брус
          </p>
          <p className='material__menu-item'>
            Стеклопакет
          </p>
          <p className='material__menu-item'>
            Фурнитура
          </p>
          <p className='material__menu-item'>
            Краски/Лаки
          </p>
        </div>

        <ul className='material__list'>
          <li className='material__item'>
            <div className='material__item-content'>
              <h3 className='material__item-title'>Брус</h3>
              <p className='material__item-text'>
                Деревянные окна Панорама изготавливаются из 3-х слойного клееного бруса. Данный материал стал широко применяться около сорока лет назад и быстро завоевал популярность на рынке пиломатериалов.
              </p>
              <p className='material__item-text'>
                И это не удивительно, ведь клеёный брус не имеет недостатков, характерных для бруса из массива, таких как: неравномерная влажность, растрескивание, различные пороки, нестабильная геометрия.
              </p>
            </div>
            <img className='material__item-img' src='/img/brus.png' alt='' />
          </li>
          <li className='material__item material__item--hide'>
            <div className='material__item-content'>
              <h3 className='material__item-title'>Стеклопакет</h3>
              <p className='material__item-text'>
                Мы применяем стеклопакеты толщиной от 32 до 40 мм, состоящие их 2-х или из 3- стекол. Мы предлагаем очень широкий выбор стеклопакетов, в зависимости
                от требований по дизайну и условий эксплуатации оконных конструкций. Современные технологии нанесения специальных покрытий на стёкла позволяют придавать стеклопакетам уникальные свойства,
                например:
              </p>
              <ul>
                <li className='material__item-adv'>пропускать солнечный свет, но задерживать жару</li>
                <li className='material__item-adv'>отражать тепло от отопительных приборов обратно в помещение</li>
                <li className='material__item-adv'>быть цветными с внешней стороны, но не окрашивать, проходящий сквозь них свет</li>
              </ul>
              <p />
            </div>
            <img className='material__item-img' src='/img/material1.jpg' alt='' />
          </li>
          <li className='material__item material__item--hide'>
            <div className='material__item-content'>
              <h3 className='material__item-title'>Фурнитура</h3>
              <p className='material__item-text'>
                Мы применяем поворотно - откидную фурнитуру австрийской фирмы МАСО, которая имеет запорные элементы по всему периметру створки и имеет широкие возможности по регулировке положения створки относительно рамы и уровня прижима запорных элементов.
              </p>
              <p className='material__item-text'>
                Все элементы фурнитуры имеют стойкое антикоррозийное покрытие, очень хорошо удерживающее смазку. Производитель гарантирует безотказную работу в течение 20 000 циклов открываний/закрываний. Широкая цветовая гамма оконных ручек и декоративных накладок на петли даёт большие возможности по дизайну.
              </p>
            </div>
            <img className='material__item-img' src='/img/furnitura.png' alt='' />
          </li>
          <li className='material__item material__item--hide'>
            <div className='material__item-content'>
              <h3 className='material__item-title'>Краски/Лаки</h3>
              <p className='material__item-text'>
                Применяемые нами материалы ведущей европейской компании TEKNOS обеспечивают надёжную защиту деревянных частей от разрушительных воздействий грибка, солнца и воды. Данные материалы на водной основе, экологически чистые и имеют большой выбор по цветам.
              </p>
              <p className='material__item-text'>
                Самые уязвимые места - нижние горизонтальные части створок и рам покрыты специальными алюминиевыми накладками. Краска на наших первых изделиях, выпущенных в начале 2000 - х годов, прекрасно сохранилась и по сей день, что полностью опровергает миф о том, что деревянные окна нужно каждый год подкрашивать и ремонтировать.
              </p>
            </div>
            <img className='material__item-img material__item-img--laki' src='/img/laki.png' alt='' />
          </li>
        </ul>
      </div>
    </section>
  )
}