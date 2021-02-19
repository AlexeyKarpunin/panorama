import styled from 'styled-components'

export default function Map () {
  return (
    <section className='contacts container'>
      <div className='contacts__box'>
        <h2 className='contacts__title'>Контакты</h2>
        <InfoTable>
          <li className='adres'>Ул. Н. Островского, д. 115, к. 1</li>
          <li className='adres adres--hide'>ул. Атамбаева 77А</li>
          <li className='time-work'>
            Пн - Пт: с 8:00 до 18:00 
            {' '}
            <br />
            Сб: с 9:00 до 17:00
          </li>
          <li className='contacts__email'><a href='mailto:okna@panorama30.ru'>okna@panorama30.ru</a></li>
          <li className='phone'>
            <a className='phone__number phone__number1' href='tel:89275540236'>+7(927) 554 02 36</a>
            <a className='phone__number phone__number2' href='tel:88512242525'>+7(8512) 24 25 25</a>
          </li>
          <li className='phone phone--hide'>
            <a className='phone__number phone__number1' href='tel:87756562311'>+7 (775) 656-23-11</a>
            <a className='phone__number phone__number2' href='tel:87122763580'>+7 (7122) 76-35-80</a>
          </li>
        </InfoTable>
      </div>
      <div className='map'>
        <iframe className='iframe' src='https://yandex.ru/map-widget/v1/?um=constructor%3Ada54cba6c80409f7b537af6a7c03e7ec7ecbea45702ab714a4596d1dedd9dcfe&amp;source=constructor' width='100%' frameBorder='0' title='map' />
        <iframe className='iframe iframe--hide' src='https://yandex.ru/map-widget/v1/?um=constructor%3Aef914f518ef6c45a742283762cb8aea8c3aa57431240787294dd5ecb0efc9a74&amp;source=constructor' width='100%' frameBorder='0' title='map' />
      </div>
    </section>
  )
}

const InfoTable = styled.ul`
   list-style-type: none;

   @media (max-width: 495px) {
     padding: 0;
   }
`;