/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react'
import InputMask from 'react-input-mask';
import $ from 'jquery';

export default function Price () {

  useEffect( () => {
      const price = document.querySelector('.price');
      const slide = price.querySelectorAll('.slider-price');
      const next = price.querySelectorAll('.slider-price__link--next');
      const prew = price.querySelectorAll('.slider-price__link--prew');
      const status = price.querySelector('.status-bar');
      const statusText = price.querySelector('.status-bar__text');
      const inputBox = price.querySelectorAll('.slider-price2__item');
      const inputs = price.querySelectorAll('.slider-price2__select');
      const tipCommunication = price.querySelector('.slider-price3__select--communication');
      const inputBox2 = price.querySelectorAll('.slider-price3__item');
      const inputs2 = price.querySelectorAll('.js__input');
    
      for (let i = 0; i < next.length; i++) {
    
        next[i].addEventListener('click', () => {
    
          for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
          }
    
          slide[i+1].classList.add('active');
          status.classList.add(`status${[i+2]}`);
          statusText.textContent = `Вопрос ${  [i+2]  } из 3`;
        });
      }
    
      for (let i = prew.length-1; i >= 0; i--) {
    
        prew[i].addEventListener('click', () => {
    
          for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
          }
    
          slide[i].classList.add('active');
          status.classList.remove(`status${[i+2]}`);
          status.classList.add(`status${[i+1]}`);
          statusText.textContent = `Вопрос ${  [i+1]  } из 3`;
        });
      }
    
      inputs[0].addEventListener('change', () => {
    
        const selind = inputs[0].options.selectedIndex;
        const txt = inputs[0].options[selind].text;
        const val = inputs[0].options[selind].value;
    
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].disabled = false;
        };
    
    
        if (val === 'wood') {
              inputBox[1].classList.add('slider-price2__item--hide');
              inputBox[3].classList.add('slider-price2__item--hide');
              inputBox[4].classList.remove('slider-price2__item--hide');
              inputBox[5].classList.remove('slider-price2__item--hide');
              inputBox[6].classList.add('slider-price2__item--hide');
              inputBox[7].classList.add('slider-price2__item--hide');
        } else
    
        if (val === 'PVH') {
              inputBox[1].classList.remove('slider-price2__item--hide');
              inputBox[3].classList.remove('slider-price2__item--hide');
              inputBox[4].classList.add('slider-price2__item--hide');
              inputBox[5].classList.add('slider-price2__item--hide');
              inputBox[6].classList.add('slider-price2__item--hide');
              inputBox[7].classList.add('slider-price2__item--hide');
        } else
    
        if (val === 'wood-al') {
              inputBox[1].classList.add('slider-price2__item--hide');
              inputBox[3].classList.add('slider-price2__item--hide');
              inputBox[4].classList.remove('slider-price2__item--hide');
              inputBox[5].classList.add('slider-price2__item--hide');
              inputBox[6].classList.add('slider-price2__item--hide');
              inputBox[7].classList.add('slider-price2__item--hide');
        } else
    
        if (val === 'al') {
              inputBox[1].classList.add('slider-price2__item--hide');
              inputBox[3].classList.add('slider-price2__item--hide');
              inputBox[4].classList.add('slider-price2__item--hide');
              inputBox[5].classList.add('slider-price2__item--hide');
              inputBox[6].classList.remove('slider-price2__item--hide');
              inputBox[7].classList.remove('slider-price2__item--hide');
        }
    
    
        for (let j = 0; j < inputBox.length; j++) {
    
          if (inputBox[j].classList.contains('slider-price2__item--hide')) {
            inputs[j].disabled = 'disabled';
          };
        };

      });
    
      tipCommunication.addEventListener('change', () => {
    
        const ind = tipCommunication.options.selectedIndex;
        const {text} = tipCommunication.options[ind];
        const {value} = tipCommunication.options[ind];
    
        for (let i = 0; i < inputs2.length; i++) {
          inputs2[i].disabled = false;
        };
    
    
        if (value === 'mob') {
              inputBox2[4].classList.remove('slider-price3__item--hide');
              inputBox2[5].classList.add('slider-price3__item--hide');
              inputBox2[6].classList.add('slider-price3__item--hide');
              inputBox2[7].classList.add('slider-price3__item--hide');
        } else
    
        if (value === 'whats') {
              inputBox2[4].classList.add('slider-price3__item--hide');
              inputBox2[5].classList.remove('slider-price3__item--hide');
              inputBox2[6].classList.add('slider-price3__item--hide');
              inputBox2[7].classList.add('slider-price3__item--hide');
        } else
    
        if (value === 'vk') {
              inputBox2[4].classList.add('slider-price3__item--hide');
              inputBox2[5].classList.add('slider-price3__item--hide');
              inputBox2[6].classList.remove('slider-price3__item--hide');
              inputBox2[7].classList.add('slider-price3__item--hide');
        } else
    
        if (value === 'inst') {
              inputBox2[4].classList.add('slider-price3__item--hide');
              inputBox2[5].classList.add('slider-price3__item--hide');
              inputBox2[6].classList.add('slider-price3__item--hide');
              inputBox2[7].classList.remove('slider-price3__item--hide');
        }
    
    
        for (let j = 0; j < inputs2.length; j++) {
    
          if (inputBox2[j+4].classList.contains('slider-price3__item--hide')) {
            inputs2[j].disabled = 'disabled';
          };
        };
      });
  }, []);


  useEffect( () => {
    $('.form_btn').click((evt) => {
      const phone = document.querySelector('#tel');
      const whats = document.querySelector('#whats');
      const vk = document.querySelector('#vk');
      const inst = document.querySelector('#inst');
  
      if (phone.value || whats.value || vk.value || inst.value) {
        // validate and process form
        // first hide any error messages
        $('.error').hide();

        let solo = '';
        let double = '';
        let triple = '';
        let tripleWithTwoStvorki = '';
        let four = '';
        let balcony = '';
        let balconyWithStvorki = '';

        if ($('#solo').is(':checked')) {  solo = 'да'; }
        if ($('#double').is(':checked')) {  double = 'да'; }
        if ($('#triple').is(':checked')) {  triple = 'да'; }
        if ($('#tripleWithTwoStvorki').is(':checked')) {  tripleWithTwoStvorki = 'да'; }
        if ($('#four').is(':checked')) { four = 'да'; }
        if ($('#balcony').is(':checked')) { balcony = 'да'; }
        if ($('#balconyWithStvorki').is(':checked')) { balconyWithStvorki = 'да'; }
  
        const material = $('select#material').val();
        const profile = $('select#profile').val();
        const glass = $('select#glass').val();
        const color = $('select#color').val();
        const wood = $('select#wood').val();
        const woodProfile = $('select#woodProfile').val();
        const alProfile = $('select#alProfile').val();
        const alColor = $('select#alColor').val();
        let otliv = ''
        let otkos = ''
        let setka = ''
        let podokonik = ''
  
        if ($('#otliv').is(':checked')) {  otliv = 'да'; }
        if ($('#otkos').is(':checked')) {  otkos = 'да'; }
        if ($('#setka').is(':checked')) {  setka = 'да'; }
        if ($('#podokonik').is(':checked')) {  podokonik = 'да'; }
  
        const montage = $('select#montage').val();
        const size = $('textarea#size').val();
        const communication = $('select#communication').val();
  
        const tel = $('input#tel').val();
        const whats = $('input#whats').val();
        const vk = $('input#vk').val();
        const inst = $('input#inst').val();
  
        const typeBanner = $('input#type-banner').val();
  
        const dataString = `solo=${ solo  }&double=${  double  }&triple=${  triple  }&tripleWithTwoStvorki=${  tripleWithTwoStvorki
         }&four=${  four  }&balcony=${  balcony  }&balconyWithStvorki=${  balconyWithStvorki
  
         }&material=${  material  }&profile=${  profile  }&glass=${  glass  }&color=${  color  }&wood=${  wood
         }&woodProfile=${  woodProfile  }&alProfile=${  alProfile  }&alColor=${  alColor
  
         }&otliv=${  otliv  }&otkos=${  otkos  }&setka=${  setka  }&podokonik=${  podokonik
  
         }&montage=${  montage  }&size=${  size  }&communication=${  communication  }&tel=${  tel  }&whats=${  whats  }&vk=${  vk
         }&inst=${  inst  }&typeBanner=${  typeBanner}`;
        // alert (dataString);return false;
  
  
  
        $.ajax({
          type: 'POST',
          url: '/api/big-form',
          data: dataString,
          success() {
            $('#price_form').html("<div id='message'></div>");
            $('#message').html('<h2>Ваша заявка отправлена!</h2>')
            .append('<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>')
            .hide()
            .fadeIn(1500, () => {
              $('#message').append("<img id='checkmark' src='/img/check.png' />");
            });
          }
        });
  
        return false;
      } 
        evt.preventDefault();
        phone.classList.add('slider-price3__input--error');
        vk.classList.add('slider-price3__input--error');
        whats.classList.add('slider-price3__input--error');
        inst.classList.add('slider-price3__input--error');
    });
  }, [])

  return (
    <section className='price'>
      <div className='in_block_price'>
        <h2 className='price__title'>
          Узнайте стоимость
          <span className='price__red'>вашего окна</span>
        </h2>
        <div id='price_form'>
          <form className='price__content container' action='' method='post' id='price'>
            <p className='price__text'>
              Ответьте на несколько вопросов и наш менеджер сообщит Вам итоговую стоимость в течение
              <b>30 минут.</b>
            </p>
            <div className='status-bar'>
              <span className='status-bar__text'>Вопрос 1 из 3</span>
            </div>
            <div className='slider-price slider-price1 active'>
              <span className='window__type__text'>Укажите тип окна</span>
              <ul className='slider-price__list'>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='solo' id='solo' />
                    <img className='slider-price__img' src='/img/window1.jpg' alt='Одностворчатое окно' />
                    <p className='slider-price__text'>Одностворчатое окно</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='double' id='double' />
                    <img className='slider-price__img' src='/img/window2.jpg' alt='Двухстворчатое окно' />
                    <p className='slider-price__text'>Двухстворчатое окно</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='triple' id='triple' />
                    <img className='slider-price__img' src='/img/window3.jpg' alt='Трехстворчатое окно с одной поворотно-откидной створкой' />
                    <p className='slider-price__text'>Трехстворчатое окно с&nbsp;одной поворотно-откидной створкой</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='triple-with-two-stvorki' id='tripleWithTwoStvorki' />
                    <img className='slider-price__img' src='/img/window7.jpg' alt='Трехстворчатое окно с двумя поворотно-откидными створками' />
                    <p className='slider-price__text'>Трехстворчатое окно с&nbsp;двумя поворотно-откидными створками</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='four' id='four' />
                    <img className='slider-price__img' src='/img/window5.jpg' alt='Четырехстворчатое окно' />
                    <p className='slider-price__text'>Четырехстворчатое окно</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='balcony' id='balcony' />
                    <img className='slider-price__img' src='/img/window4.jpg' alt='Балконный блок' />
                    <p className='slider-price__text'>Балконный блок</p>
                  </label>
                </li>
                <li className='slider-price__item'>
                  <label className='slider-price__label'>
                    <input className='slider-price__check' type='checkbox' name='balcony-with-stvorki' id='balconyWithStvorki' />
                    <img className='slider-price__img' src='/img/window6.jpg' alt='Балконный блок с поворотно-откидными створками' />
                    <p className='slider-price__text'>Балконный блок с&nbsp;поворотно-откидными створками</p>
                  </label>
                </li>
              </ul>
              <a className='slider-price__link slider-price__link--next banner__btn'>Далее</a>
            </div>
            <div className='slider-price slider-price2'>
              <ul className='slider-price2__list'>
                <li className='slider-price2__item'>
                  <label className='slider-price2__label'>Материал</label>
                  <select className='slider-price2__select slider-price2__select--material' name='material' id='material'>
                    <option value='wood'>Дерево</option>
                    <option value='PVH' selected=''>ПВХ</option>
                    <option value='wood-al'>Дерево-алюминий</option>
                    <option value='al'>Алюминий</option>
                  </select>
                </li>

                <li className='slider-price2__item'>
                  <label className='slider-price2__label'>Профиль</label>
                  <select className='slider-price2__select slider-price2__select--profile' name='profile' id='profile'>
                    <option value=''>Выбрать</option>								
                    <option value='REHAU BLITZ'>REHAU BLITZ</option>
                    <option value='REHAU GRAZIO'>REHAU GRAZIO</option>
                    <option value='REHAU GRAZIO'>REHAU INTELIO</option>
                  </select>
                </li>

                <li className='slider-price2__item'>
                  <label className='slider-price2__label'>Стеклопакет</label>
                  <select className='slider-price2__select slider-price2__select--glass' name='glass' id='glass'>
                    <option value=''>Выбрать</option>
                    <option value='обычный'>обычный</option>
                    <option value='энергосберегающий'>энергосберегающий</option>
                    <option value='солнцезащитный'>солнцезащитный</option>
                    <option value='антивандальный'>антивандальный</option>
                  </select>
                </li>

                <li className='slider-price2__item'>
                  <label className='slider-price2__label'>Цвет</label>
                  <select className='slider-price2__select slider-price2__select--color' name='color' id='color'>
                    <option value=''>Выбрать</option>
                    <option value='белый'>белый</option>
                    <option value='ламинация с 2-х сторон'>ламинация с 2-х сторон</option>
                    <option value='ламинация снаружи'>ламинация снаружи</option>
                    <option value='ламинация изнутри'>ламинация изнутри</option>
                  </select>
                </li>

                <li className='slider-price2__item slider-price2__item--hide'>
                  <label className='slider-price2__label'>Порода дерева</label>
                  <select className='slider-price2__select slider-price2__select--wood' name='wood' id='wood' disabled=''>
                    <option value=''>Выбрать</option>
                    <option value='Сосна'>Сосна</option>
                    <option value='Лиственница'>Лиственница</option>
                    <option value='Дуб'>Дуб</option>
                  </select>
                </li>

                <li className='slider-price2__item slider-price2__item--hide'>
                  <label className='slider-price2__label'>Профильная система</label>
                  <select className='slider-price2__select slider-price2__select--wood-profile' name='wood-profile' id='woodProfile' disabled=''>
								
                    <option value=''>Выбрать</option>
                    <option value='Стандарт'>Стандарт</option>
                    <option value='Оптима'>Оптима</option>
                    <option value='Премиум'>Премиум</option>
                  </select>
                </li>

                <li className='slider-price2__item slider-price2__item--hide'>
                  <label className='slider-price2__label'>Профиль</label>
                  <select className='slider-price2__select slider-price2__select--al-profile' name='al-profile' id='alProfile' disabled=''>
                    <option value=''>Выбрать</option>
                    <option value='СИАЛ КП45'>СИАЛ КП45 (холодный)</option>
                    <option value='СИАЛ КПТ60'>СИАЛ КПТ60 (теплый)</option>
                  </select>
                </li>

                <li className='slider-price2__item slider-price2__item--hide'>
                  <label className='slider-price2__label'>Цвет</label>
                  <select className='slider-price2__select slider-price2__select--al-color' name='al-color' id='alColor' disabled=''>
                    <option value=''>Выбрать</option>
                    <option value='белый'>белый</option>
                    <option value='коричневый'>коричневый</option>
                    <option value='другой'>другой</option>
                  </select>
                </li>
              </ul>
              <div className='slider-price__btn-box'>
                <a className='slider-price__link slider-price__link--prew banner__btn'>Назад</a>
                <a className='slider-price__link slider-price__link--next banner__btn'>Далее</a>
              </div>
            </div>
            <div className='slider-price slider-price3'>
              <ul className='slider-price3__list'>
                <li className='slider-price3__item'>
                  <label className='slider-price3__label'>Дополнения</label>
                  <div className='slider-price3__check-box'>
                    <div>
                      <input className='slider-price3__check' type='checkbox' name='otliv' id='otliv' />
                      <label htmlFor='otliv'>отлив</label>
                    </div>
                    <div>
                      <input className='slider-price3__check' type='checkbox' name='otkos' id='otkos' />
                      <label htmlFor='otkos'>откос</label>
                    </div>
                    <div>
                      <input className='slider-price3__check' type='checkbox' name='setka' id='setka' />
                      <label htmlFor='setka'>сетка</label>
                    </div>
                    <div>
                      <input className='slider-price3__check' type='checkbox' name='podokonik' id='podokonik' />
                      <label htmlFor='podokonik'>подоконник</label>
                    </div>
                  </div>
                </li>

                <li className='slider-price3__item'>
                  <label className='slider-price3__label'>Монтаж</label>
                  <select className='slider-price3__select slider-price3__select--montage' name='montage' id='montage'>
                    <option value='yes'>Да</option>
                    <option value='no'>Нет</option>
                  </select>
                </li>

                <li className='slider-price3__item'>
                  <label className='slider-price3__label'>Размер</label>
                  <textarea className='slider-price3__textarea' placeholder='Ширина х высота, например, 1200х1500 мм' rows='1' name='size' id='size' />
                </li>

                <li className='slider-price3__item'>
                  <label className='slider-price3__label'>Способ связи</label>
                  <select className='slider-price3__select slider-price3__select--communication' name='communication' id='communication'>
                    <option value='mob'>Мобильный</option>
                    <option value='whats'>Whatsapp</option>
                    <option value='vk'>ВКонтакте</option>
                    <option value='inst'>Инстаграм</option>
                  </select>
                </li>

                <li className='slider-price3__item'>
                  <label className='slider-price3__label'>Мобильный</label>
                  <InputMask mask='+7(999) - 999 9999' className='slider-price3__input slider-price3__input--tel js__input' type='tel' name='tel' id='tel' placeholder='+7 (___) - ___ ___' inputMode='text' />
                </li>
                <li className='slider-price3__item slider-price3__item--hide'>
                  <label className='slider-price3__label'>Whatsapp</label>
                  <input className='slider-price3__input slider-price3__input--whats js__input' type='text' name='whats' id='whats' />
                </li>
                <li className='slider-price3__item slider-price3__item--hide'>
                  <label className='slider-price3__label'>Вконтакте</label>
                  <input className='slider-price3__input slider-price3__input--vk js__input' type='text' name='vk' id='vk' />
                </li>
                <li className='slider-price3__item slider-price3__item--hide'>
                  <label className='slider-price3__label'>Инстаграм</label>
                  <input className='slider-price3__input slider-price3__input--inst js__input' type='text' name='inst' id='inst' disabled='' />
                </li>
                <li>
                  <input className='hide-input' type='hidden' name='banner' value='new - Главная страница' id='type-banner' />
                </li>
              </ul>
              <div className='slider-price__btn-box'>
                <a className='slider-price__link slider-price__link--prew banner__btn'>Назад</a>
                <button className='slider-price__link slider-price__link--send banner__btn form_btn' type='submit' id='submit'>Готово</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}