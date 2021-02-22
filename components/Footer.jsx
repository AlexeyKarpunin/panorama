import Link from 'next/link';
import { useSelector } from 'react-redux';
import SelectorCities from './SelectorCities';

export default function Footer () {
  const city = useSelector( state => state.city.city);

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__top footer-top'>
          <div className='footer-top__logo'>
            <img src='/img/logo-panorama.png' width='198' height='43' alt='Панорама' />

            <p className='footer-top__info'>
              ИНН 301700612640
              ОГРН 307301518000014
            </p>
          </div>
          <nav className='footer-menu'>			
            <div className='menu-footer-menu-container'>
              <ul id='menu-footer-menu' className='footer-menu__list'>
                {city === 'Astrakhan' ? (
                  <>
                    <Link href='/wood-windows'><li id='menu-item-37' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-37'><a href='/'>Деревянные окна</a></li></Link>  
                    <Link href='/plastic-windows'><li id='menu-item-36' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-36'><a href='/'>Пластиковые окна</a></li></Link> 
                    <Link href='/aluminum-construction'><li id='menu-item-35' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-35'><a href='/'>Алюминиевые конструкции</a></li></Link> 
                    <Link href='/jalousie'><li id='menu-item-34' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-34'><a href='/'>Жалюзи/Рольшторы</a></li></Link> 
                    <Link href='/glazing'><li id='menu-item-51' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-51'><a href='/'>Остекление</a></li></Link> 
                  </>
               )
                : (
                  <>
                    <Link href='/Atirau/wood-windows'><li id='menu-item-37' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-37'><a href='/'>Деревянные окна</a></li></Link>  
                    <Link href='/Atirau/plastic-windows'><li id='menu-item-36' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-36'><a href='/'>Пластиковые окна</a></li></Link> 
                    <Link href='/Atirau/aluminum-construction'><li id='menu-item-35' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-35'><a href='/'>Алюминиевые конструкции</a></li></Link> 
                    <Link href='/Atirau/jalousie'><li id='menu-item-34' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-34'><a href='/'>Жалюзи/Рольшторы</a></li></Link> 
                    <Link href='/Atirau/glazing'><li id='menu-item-51' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-51'><a href='/'>Остекление</a></li></Link> 
                  </>
                )}
              </ul>
            </div>			
          </nav>
          <div className='footer__file-box'>
            <h3 className='footer__file-title'>Скачать:</h3>
            <ul className='footer__files'>
              <li className='footer__file'><a href='https://panorama30.ru/wp-content/themes/panorama/files/WoodWindow.pdf' target='_blank'>Каталог "Деревянные&nbsp;окна"</a></li>
              <li className='footer__file'><a href='https://panorama30.ru/wp-content/themes/panorama/files/SberbankQR.pdf' target='_blank'>Оплатить через Сбербанк Онлайн</a></li>
            </ul>
          </div>	
        </div>
        <div className='footer__info footer-info'>
          <p>Политика конфиденциальности</p>
          <p className='footer-info__sity'>
            Ваш город: 
            {' '}
            <SelectorCities classN='header-form__select--footer' name='sity' id='sity' />
          </p>
          <a className='footer-info__email' href='mailto:okna@panorama30.ru'>okna@panorama30.ru</a>
          <p className='phone'>
            <a className='phone__number phone__number1' href='tel:89275540236'>+7(927) 554 02 36</a>
            <a className='phone__number phone__number2' href='tel:88512242525'>+7(8512) 24 25 25</a>
          </p>
          <p className='phone phone--hide'>
            <a className='phone__number phone__number1' href='tel:87756562311'>+7 (775) 656-23-11</a>
            <a className='phone__number phone__number2' href='tel:87122763580'>+7 (7122) 76-35-80</a>
          </p>
          <div className='footer-info__social social'>
            <a className='social__link social__link--whatsapp' title='Whatsapp' href='whatsapp://send?phone=79272823957'>
              <svg height='32' viewBox='0 0 512 512' width='32' xmlns='http://www.w3.org/2000/svg' fill='#fff'>
                <path d='M0 0h512v512H0z' />
                <path d='M456 250.85c0 107.61-87.91 194.85-196.36 194.85-34.43 0-66.78-8.8-94.92-24.24L56 456l35.44-104.54a192.84 192.84 0 01-28.17-100.6C63.27 143.23 151.18 56 259.63 56 368.1 56 456 143.24 456 250.85zM259.64 87.03c-91.04 0-165.1 73.5-165.1 163.82 0 35.84 11.69 69.04 31.45 96.05l-20.62 60.83 63.44-20.16a165 165 0 0090.82 27.1c91.03 0 165.1-73.5 165.1-163.82 0-90.33-74.06-163.82-165.1-163.82zm99.15 208.7c-1.2-2-4.42-3.2-9.22-5.58-4.82-2.39-28.5-13.94-32.9-15.53-4.42-1.6-7.63-2.4-10.84 2.38-3.2 4.8-12.42 15.54-15.24 18.72-2.8 3.2-5.6 3.6-10.42 1.2-4.81-2.39-20.33-7.43-38.71-23.7-14.31-12.66-23.97-28.29-26.78-33.07-2.8-4.78-.3-7.36 2.11-9.74 2.17-2.15 4.81-5.58 7.22-8.37 2.41-2.79 3.21-4.78 4.81-7.96 1.62-3.2.8-5.98-.4-8.38-1.2-2.38-10.83-25.88-14.84-35.44-4.01-9.56-8.01-7.97-10.83-7.97-2.8 0-6.01-.4-9.23-.4-3.2 0-8.42 1.2-12.83 5.97-4.41 4.79-16.84 16.34-16.84 39.84 0 23.5 17.24 46.2 19.65 49.4 2.4 3.17 33.29 52.96 82.22 72.1 48.95 19.1 48.95 12.74 57.77 11.93 8.82-.79 28.47-11.54 32.49-22.7 4-11.15 4-20.72 2.81-22.7z' fill='#000' />
              </svg>
            </a>
            <a className='social__link' href='https://www.facebook.com/panorama30/' target='_blank'>
              <svg className='social__svg_fb' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M10 13h3v-2.8c0-1.1.3-2.7 1.1-3.8.8-1.1 1.8-1.8 3.8-1.8 3.2 0 4.4.5 4.4.5l-.7 3.8s-1.4-.3-2.4-.3S17 9 17 10v3h4.6l-.3 4H17v12h-4V17h-3v-4z' />
              </svg>
            </a>
            <a className='social__link' href='https://www.instagram.com/panorama30/' target='_blank'>
              <svg className='social__svg_inst' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M23.4 4H8.6C6.1 4 4 6.1 4 8.6v14.7C4 25.9 6.1 28 8.6 28h14.7c2.6 0 4.6-2.1 4.6-4.6V8.6c.1-2.5-2-4.6-4.5-4.6zm1.3 2.8h.5v4h-4.1V6.7l3.6.1zm-12.1 6.7c.8-1.1 2-1.8 3.4-1.8s2.7.7 3.4 1.8c.5.7.8 1.5.8 2.5 0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2c0-.9.3-1.8.8-2.5zm13.1 9.9c0 1.3-1 2.3-2.3 2.3H8.6c-1.3 0-2.3-1-2.3-2.3v-9.8h3.6c-.3.8-.5 1.6-.5 2.5 0 3.6 2.9 6.6 6.6 6.6 3.6 0 6.6-2.9 6.6-6.6 0-.9-.2-1.7-.5-2.5h3.6v9.8z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='footer__copyright--bz'>
          <p>© 2020 Все права защищены</p>
          <div className='footer__copyright-logo' />
          <a href='https://bzcekh.ru/' alt='Маркетинговое агентство «Бизнес Цех»' title='Заказать интернет сайт, интернет магазин в Астрахани' target='_blank' />
        </div>
      </div>
    </footer>
  )
}