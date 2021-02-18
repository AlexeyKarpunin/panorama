/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import InputMask from 'react-input-mask';
import $ from 'jquery';
import { useEffect } from 'react';

export default function Measure () {

  useEffect( () => {
    $('.button').click(() => {
      // validate and process form
      // first hide any error messages
      $('.error').hide();
  
      const name = $('input#name').val();
  
      if (name === '') {
        $('label#name_error').show();
        $('input#name').focus();
        return false;
      }
     
      const phone = $('input#phone').val();
      if (phone === '') {
        $('label#phone_error').show();
        $('input#phone').focus();
        return false;
      }
     
      const banner = $('input#type-banner-measure').val();
  
      const dataString = `name=${ name  }&phone=${  phone  }&banner=${  banner}`;
  
      $.ajax({
        type: 'POST',
        url: '/api/small-form',
        data: dataString,
  
        success() {
          $('#contact_form').html("<div id='message'></div>");
          $('#message').html('<h2>Ваша заявка отправлена!</h2>')
          .append('<p>Наш администратор свяжется с Вами<br> в ближайшее время.</p>')
          .hide()
          .fadeIn(1500, () => {
            $('#message').append("<img id='checkmark' src='/img/check.png' />");
          });
        }
      });
      return false;
    });
  }, [])
  
  return (
    <section className='measure'>
      <div className='measure__content container'>
        <h2 className='measure__title'>Вызвать замерщика</h2>
        <p className='measure__text'>
          Замерщик подстроится под удобное для Вас время. Замер займет не более 10 минут.
          Это
          <span className='measure__text--red'>БЕСПЛАТНО</span>
          {' '}
          и ни к чему Вас не обязывает.
        </p>
        <div id='contact_form'>
          <form method='POST' name='contact' action='' className='measure__form'>

            <input type='text' id='name' name='name' placeholder='Ваше имя' className='measure__input' required />
            <label className='error' htmlFor='name' id='name_error' style={{display: 'none'}}>Обязательное поле для заполнения.</label>

            <InputMask 
              mask='+7(999) - 999 9999' 
              type='text'
              id='phone' 
              name='phone' 
              placeholder='+7 (___) - ___ ____' 
              className='measure__input measure__input--tel' 
              required 
              inputMode='text' 
            />

            <label className='error' htmlFor='phone' id='phone_error' style={{display: 'none'}}>Обязательное поле для заполнения.</label>

            <div className='text_police_check'>
              <input type='checkbox' checked disabled />
              Согласен с политикой конфиденциальности
            </div>
            <input className='hide-input' type='hidden' name='banner' value='new - Главная страница' id='type-banner-measure' />
            <button type='submit' id='submit_btn' name='submit' className='measure__btn banner__btn button'>Вызвать замерщика</button>
          </form>
        </div>
      </div>
    </section>
  )
}