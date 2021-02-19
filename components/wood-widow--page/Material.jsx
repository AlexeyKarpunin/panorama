/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react'
import styled from 'styled-components';

const STATE_NAMES_OF_MENU = {
  brus: 'Брус',
  glass: 'Стеклопакет',
  forniture: 'Форнитура',
  color: 'Краски'
}

export default function Material () {
  const {brus, glass, forniture, color} = STATE_NAMES_OF_MENU;

  const [width, setWidth] = useState(1920);
  const [content, setContent] = useState(brus);
  
  function toggleMenu (e, newContent) {setContent(newContent)};

  useEffect( () => {
    function widthLisner () {
      const widthWindow = window.innerWidth
      setWidth(widthWindow)
    }
  
    widthLisner();
    window.addEventListener('resize', widthLisner);
    return () => window.removeEventListener('resize', widthLisner);
  }, [])

  return (
    <section className='material'>
      <div className='material__content container'>

        <h2 className='material__title'>
          Материалы и
          {' '}
          <span className='banner__text_red'>технологии</span>
        </h2>
        {width > 1023 ? (
          <>
            <div className='material__menu'>
              <p 
                onClick={(e) => toggleMenu(e, brus)} 
                className={`material__menu-item ${content === brus ? 'material__menu-item--active' : ''}`}
              >
                Брус
              </p>
              <p 
                onClick={(e) => toggleMenu(e, glass)} 
                className={`material__menu-item ${content === glass ? 'material__menu-item--active' : ''}`}
              >
                Стеклопакет
              </p>
              <p 
                onClick={(e) => toggleMenu(e, forniture)} 
                className={`material__menu-item ${content === forniture ? 'material__menu-item--active' : ''}`}
              >
                Фурнитура
              </p>
              <p 
                onClick={(e) => toggleMenu(e, color)}
                className={`material__menu-item ${content === color ? 'material__menu-item--active' : ''}`}
              >
                Краски/Лаки
              </p>
            </div>

            <ul className='material__list'>
              <li className={`material__item ${ content === brus ? '' : 'material__item--hide'}`}>
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
              <li className={`material__item ${ content === glass ? '' : 'material__item--hide'}`}>
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
              <li className={`material__item ${ content === forniture ? '' : 'material__item--hide'}`}>
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
              <li className={`material__item ${ content === color ? '' : 'material__item--hide'}`}>
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
          </>
  )
        : 
          <MobileAccordion onClick={toggleMenu} component={content} /> }
      </div>
    </section>
  )
}


function MobileAccordion ({component, onClick}) {
  const {brus, glass, forniture, color} = STATE_NAMES_OF_MENU;
  const [anime, setAnime] = useState(component);

  useEffect( () => {
    setTimeout( () => {setAnime(component)}, 10);
  }, [component])

  return (
    <AccSection>
      <AccContent>
        <AccItem>
          <AccBtn 
            onClick={(e) => onClick(e, brus)} 
            status={component === brus ? 'active' : ''}
          >
            Брус
          </AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === brus ? 'active' : ''}>
              <div className='material__item'>
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
              </div>
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn 
            onClick={(e) => onClick(e, glass)} 
            status={component === glass ? 'active' : ''}
          >
            Стеклопакет
          </AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === glass ? 'active' : ''}>
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
            </HiidenWrraper>
          
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn 
            onClick={(e) => onClick(e, forniture)} 
            status={component === forniture ? 'active' : ''}
          >
            Фурнитура
          </AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === forniture ? 'active' : ''}>
              <div className='material__item'>
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
              </div>
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn 
            onClick={(e) => onClick(e, color)} 
            status={component === color ? 'active' : ''}
          >
            Краски/Лаки
          </AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === color ? 'active' : ''}>
              <div className='material__item'>
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
              </div>
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
      </AccContent>
    </AccSection>
  );
}

const AccSection = styled.div``;
const AccContent = styled.div``;
const AccItem = styled.div``;
const AccBtn = styled.div`
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  background: ${props => props.status === 'active' ? '#ff0' : '#3a3a3a'};
  color: ${props => props.status === 'active' ? '#000' : '#fff'};
  text-transform: uppercase;
  &:hover {
    cursor: poiner;
  }
`;
const ControllBlock = styled.div`
  overflow: hidden;
`;

const HiidenWrraper = styled.div`
  transition-duration: 1s;
  margin-top: ${props => props.status === 'active' ? '0px' : '-1500px;'}

  @media (max-width: 769px) {
    transition-duration: 2s;
  }
`;
