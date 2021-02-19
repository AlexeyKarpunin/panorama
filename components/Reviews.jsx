/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';

export default function Revews () {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  const [audios, setAudios] = useState([]);

 useEffect( () => {
    const reviews = document.querySelector('.reviews');
    const item = reviews.querySelectorAll('.reviews__item');
    const audio = reviews.querySelectorAll('.reviews__audio');
    const play = reviews.querySelectorAll('.reviews__btn');
  
    setItems(item);
    setAudios(audio);

    for (let i = 0; i < play.length; i++) {
  
      play[i].addEventListener('click', () => {
        if (play[i].classList.contains('stop')) {
          play[i].classList.remove('stop');
          audio[i].pause();
        } else {
          play[i].classList.add('stop');
          audio[i].play();
        }
      });
    }

 
// scrit for review.
const reviewBtn = document.querySelector('.review__btn_send');
const modalReviewWindow = document.querySelector('.modal__window__reviews');
const closeBtn = document.querySelector('.reviews__modal__close');
const modalBackGround = document.querySelector('.modal__background');
const body = document.querySelector('body');

reviewBtn.addEventListener('click', () => {
  modalReviewWindow.classList.add('activ__review__window');
  modalBackGround.classList.add('activ__review__window');
	body.classList.add('relative__position');
});

closeBtn.addEventListener('click', () => {
  modalReviewWindow.classList.remove('activ__review__window');
  modalBackGround.classList.remove('activ__review__window');
  body.classList.remove('relative__position');
});

 }, [])

 function nextReviwer () {
  if (count < items.length) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('reviews__item--hide');
      if (audios[i]) {
        audios[i].pause();
      }
    }

    items[count].classList.remove('reviews__item--hide');
    setCount(count + 1) ;
  }
 }

 

 function prevReviwer () {
  if (count > 1) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('reviews__item--hide');
  if (audios[i]) {
    audios[i].pause();
      }
    }

    items[count-2].classList.remove('reviews__item--hide');
    setCount(count - 1) ;
  } else {
    setCount(1) ;;
  }
 }

  return (
    <section className='reviews'>
      <div className='reviews__content container'>
        <h2 id='review--top' className='reviews__title'>Отзывы наших заказчиков</h2>
        <a onClick={prevReviwer} className='reviews__pagination reviews__pagination--prew--def' type='button' href='#review--top' />
        <ul className='reviews__list'>
          <li className='reviews__item reviews__item--google'>
            <div style={{width: '100%'}}>
              <div className='reviews__item--google--info'>
                <div className='review__img__container__google'>
                  <img className='review__img' src='https://lh5.googleusercontent.com/-cVxomswolKM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclhuqSwPmDrxIAiKh6S1QFYaEUNeg/s40-c0x00000000-cc-rp/photo.jpg' alt='avatar' />
                  <div className='review__name__wrraper__google'>
                    <div className='review__name'>Елена Отмани</div>
                    <div className='starts__container__google'>
                      <div className='starts__wrraper__google'>
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                      </div>
                      <div className='review__data'>10 декабря 2020</div>
                    </div>
                  </div>
                </div>
                <div className='review__logo google--logo' />
              </div>
              <div />
            </div>
            <div>
              <p className='review__text'>
                Три года назад, заказывала в 'Панораме', окна и остекление балкона  По истечению этого времени, в очередной раз  хочу выразить свою Благодарность: Руководителю  🤲🌹🤝за слаженную, профессиональную организацию всей команды 👌👌,Менеджерам Анне и Дарье за внимание, помощь в выборе заказа, доброжелательность, это общение осталось в сердце 🤲🌹🌹🌹❤️🤲. .. Виктору,
                Владиславу, Муслиму Сергеевичу и ВСЕМ РЕБЯТАМ которые выполняли работу по установке окон.... Такая окуратность в работе,  педантичность, пунктуальность, вежливость и КАЧЕСТВО! Так Красиво работать могут не многие!! Тем более приятно, что в нашем городе есть такая команда профессионалов👌
                Всем РЕКОМЕНДУЮ эту компанию... все четко - качественно если одним словом классная работа! Меня, мои окна Радуют каждый день ...и сейчас, прошло уже столько времени, а они как новые👌 Благодарю! 🤲🌹🤝 и непременно продолжу сотрудничество только с Вами ребята,  на днях приду ууу .. теперь нужна дверь  😊
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://www.google.com/search?tbm=lcl&amp;ei=UmGyX7TYDOP4qwG_3otQ&amp;q=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;oq=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;gs_l=psy-ab.12...0.0.0.57538.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.7mGBoLNQtaAlrd=0x41a905142f5dea75:0x7b35ade4a44828c6,1,,,&amp;rlfi=hd:;si:8878193437951142086,l,CizQvtC60L3QsCDQv9Cw0L3QvtGA0LDQvNCwINCw0YHRgtGA0LDRhdCw0L3RjCIDiAEBWkkKGdC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAiLNC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAg0LDRgdGC0YDQsNGF0LDQvdGM;mv:[[46.3461937,48.069102199999996],[46.312843699999995,48.021444699999996]]'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>

          <li className='reviews__item reviews__item--hide'>
            <div>
              <div className='review__gis'>
                <img className='review__img' src='https://i9.photo.2gis.com/images/profile/844424968422468_7078_64x64.jpg' alt='avatar' />
                           
                <div className='review__gis__start__container'>
                  <div className='review__name'>
                    Елена Крылова
                    <br /> 
                    {' '}
                    <span className='review__data'>3 декабря 2020</span>
                    {' '}
                  </div>
                  <div className='review__logo gis--logo' />
                  <div className='review__stars__list'>
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                  </div>
                </div>
              </div>
              <p className='review__text'>
                Стоят окна от Панорамы в частном доме, в 5-ти комнатной квартире свекрови, в двушке на Бабаевского, в однушке на Ужгородской, в двушке на Зелёной, в коттедже в Карагалях, и во всех квартирах родственников и знакомых, в том числе в коттеджах! Окна верх всех похвал, проверено десятилетием.
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://go.2gis.com/djt1gk'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <div>
              <div className='review__gis'>
                <div className='VT__blue'>ВТ</div>
                <div className='review__gis__start__container'>
                  <div className='review__name'>
                    Вячеслав тамбовцев
                    <br /> 
                    {' '}
                    <span className='review__data'>29 октября 2020</span>
                    {' '}
                  </div>
                  <div className='review__logo gis--logo' />
                  <div className='review__stars__list'>
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                  </div>
                </div>
              </div>
              <p className='review__text'>
                Хочу поблагодарить вашу компанию за проделанную работу! Заказываем у вас пластиковые окна уже третий раз начиная с 2013 года. 
                Очень довольны качеством исполнения конструкций и качеством монтажа! Последний наш заказ был в сентябре (монтаж-09.09.2020).
                Со временем во многих компаниях качество изготовления и особенно монтажа падает в разы,но это не про вашу компанию.
                Время показывает,что ваша команда работает всегда на уровне профессионалов,от замера до последующего сервиса после монтажа!
                Вы не бросаете своих клиентов после выполнения условий договора,а это очень важно.Огромное спасибо девочкам-менеджерам,
                замерщику,который всё объяснил и аргументировал,и предложил,ребятам монтажникам,делают все слаженно и профессионально,
                вообщем как для себя и конечно же руководителю Валерию за четкий и грамотный подход к делу!Каждый в команде делает свое дело!
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://go.2gis.com/djt1gk'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <div>
              <div className='review__gis'>
                <img className='review__img' src='https://i3.photo.2gis.com/images/profile/844424972996996_464f_64x64.jpg' alt='avatar' />
                <div className='review__gis__start__container'>
                  <div className='review__name'>
                    ​De La Somnia93
                    <br /> 
                    {' '}
                    <span className='review__data'>11 сентября 2020</span>
                  </div>
                  <div className='review__logo gis--logo' />
                  <div className='review__stars__list'>
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                  </div>
                </div>
              </div>
              <p className='review__text'>
                11 сентября нам было установлено окно. Вместо установленного срока по установке, сделали все гораздо раньше. 
                Остались довольны проведенным качеством работ. Выражаем благодарность всем сотрудникам компании "Панорама", 
                а именно монтажникам Константину и Алексею, а также менеджеру Пономаревой А.С. за внимательное отношение к 
                клиентам и за подсказку в подборе материалов. Возможно обратимся ещё раз и будем советовать близким и знакомым 
                сотрудничать с Вами!
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://go.2gis.com/djt1gk'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <div>
              <div className='review__gis'>
                <img className='review__img' src='https://i1.photo.2gis.com/images/profile/30258560051276229_130a_64x64.jpg' alt='avatar' />
                <div className='review__gis__start__container'>
                  <div className='review__name'>
                    {' '}
                    Полина Сергеева
                    <br /> 
                    {' '}
                    <span className='review__data'>9 сентября 2020</span>
                    {' '}
                  </div>
                  <div className='review__logo gis--logo' />
                  <div className='review__stars__list'>
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                  </div>
                </div>
              </div>
              <p className='review__text'>
                Хочу выразить свою благодарность мастерам-монтажникам Юсову Сергею и Чернову Валерию, за добросовестное 
                отношение к работе, профессионализм и чуткость к клиентам!!! А так же всему коллективу компании «Панорама»!
                Спасибо вам огромное, процветания Вам!!! Мы очень-очень довольны, рекомендую всем!!!
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://go.2gis.com/djt1gk'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <div>
              <div className='review__gis'>                    
                <img className='review__img' src='https://i5.photo.2gis.com/images/profile/844424968814255_e850_64x64.jpg' alt='avatar' />
                <div className='review__gis__start__container'>
                  <div className='review__name'>
                    Gadilbek Mendiyanov
                    <br /> 
                    {' '}
                    <span className='review__data'>24 мая 2020</span>
                    {' '}
                  </div>
                  <div className='review__logo gis--logo' />
                  <div className='review__stars__list'>
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                    <span className='active__star' />
                  </div>
                </div>
              </div>
              <p className='review__text'>
                Доброго всем здравия!
                Наткнулся случайно, в 2ГИС на отзывы о компании Панорама, и вот я тоже решил написать комментарий. Я дважды ставил окна ПВХ от компании Панорама, это было в 2015 году в частный дом в г. Атырау и в квартиру 2019 году, и знаете, я ни на секунду не пожалел и не жалею, что обратился к ним. Окна приносят только радость в дом и дай бог им здоровья и процветания!
                Думаю, что негативные комментарий написанные выше, это написали не заказчики, а не доброжелательные конкуренты.
                Я убеждён, что девиз у компании Панорама - это качество превыше всего.
                Рекомендую окна от Панорама!!!
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://go.2gis.com/djt1gk'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--google reviews__item--hide'>
            <div style={{width: '100%'}}>
              <div className='reviews__item--google--info'>
                <div className='review__img__container__google'>
                  <img className='review__img' src='https://avatars.mds.yandex.net/get-yapic/30955/enc-f73a347c8e90b9fcd2b2d99d8c354dc643fc875457f685ba844270d8a92b0295/islands-200' alt='avatar' />
                  <div className='review__name__wrraper__google'>
                    <div className='review__name'>
                      Егор Ольховиков
                      {' '}
                      <br />
                      <span className='review__smth'>Знаток города 7 уровня</span>
                    </div>
                    <div className='starts__container__google'>
                      <div className='starts__wrraper__google'>
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                      </div>
                      <div className='review__data'>25 февраля 2020</div>
                    </div>
                  </div>
                </div>
                <div className='review__logo yandex--logo' />
              </div>
              <div />
            </div>
            <div>
              <p className='review__text'>
                Старательная компания, приветливые сотрудники, качественная продукция
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://yandex.ru/profile/199295468707?intent=reviews'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--google reviews__item--hide'>
            <div style={{width: '100%'}}>
              <div className='reviews__item--google--info'>
                <div className='review__img__container__google'>
                  <img className='review__img' src='https://avatars.mds.yandex.net/get-yapic/30061/CBPUKGT2hvWhHtQ98mc1kcuDRO4-1/islands-200' alt='avatar' />
                  <div className='review__name__wrraper__google'>
                    <div className='review__name'>
                      Елена Янукевич
                      {' '}
                      <br />
                      <span className='review__smth'>Знаток города 9 уровня</span>
                    </div>
                    <div className='starts__container__google'>
                      <div className='starts__wrraper__google'>
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                      </div>
                      <div className='review__data'>16 ноября 2019</div>
                    </div>
                  </div>
                </div>
                <div className='review__logo yandex--logo' />
              </div>
              <div />
            </div>
            <div>
              <p className='review__text'>
                
                Неоднократно заказывали окна в Панораме, всё на высшем уровне! Работники компетентны, доброжелательны! 
                Особая благодарность личному менеджеру Анне! Все остальные тоже квалифицированно всё расскажут и объясняют, 
                предлагают разные варианты, расчёты, делают всё очень быстро, изготовление быстрое и качественное! 
                Все, начиная от менеджеров, замерщиков и непосредственных исполнителей ,- профессионалы своего дела! Спасибо, что вы есть!
                            
              </p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://yandex.ru/profile/199295468707?intent=reviews'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--google reviews__item--hide'>
            <div style={{width: '100%'}}>
              <div className='reviews__item--google--info'>
                <div className='review__img__container__google'>
                  <img className='review__img' src='https://lh3.googleusercontent.com/-RVoM265DgMc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnGlKcvCWTPm28uXWPrikpYb3as_Q/s40-c0x00000000-cc-rp-ba4/photo.jpg' alt='avatar' />
                  <div className='review__name__wrraper__google'>
                    <div className='review__name'>Александра Афанасьева</div>
                    <div className='starts__container__google'>
                      <div className='starts__wrraper__google'>
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                        <span className='active__star' />
                      </div>
                      <div className='review__data'>16 ноября 2019</div>
                    </div>
                  </div>
                </div>
                <div className='review__logo google--logo' />
              </div>
              <div />
            </div>
            <div>
              <p className='review__text'>Хорошие качественные окна.</p>
              <div className='review__link'>
                <a className='link--review' target='_blank' href='https://www.google.com/search?tbm=lcl&amp;ei=UmGyX7TYDOP4qwG_3otQ&amp;q=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;oq=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;gs_l=psy-ab.12...0.0.0.57538.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.7mGBoLNQtaAlrd=0x41a905142f5dea75:0x7b35ade4a44828c6,1,,,&amp;rlfi=hd:;si:8878193437951142086,l,CizQvtC60L3QsCDQv9Cw0L3QvtGA0LDQvNCwINCw0YHRgtGA0LDRhdCw0L3RjCIDiAEBWkkKGdC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAiLNC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAg0LDRgdGC0YDQsNGF0LDQvdGM;mv:[[46.3461937,48.069102199999996],[46.312843699999995,48.021444699999996]]'>Ссылка на отзыв</a>
              </div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/afonin.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Сотрудники выполняют свою работу на 5 баллов. Всё приветливо. Качественно и надежно. Установка мне понравилась»</p>
              <div className='reviews__autor'>Афонин Сергей Николаевич</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/donskaya.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Понравилось, как поставили окна. По работе менеджера - всё замечательно, обслуживание у вас приятное. Если в будущем будем ставить окна, то к вам обратимся.»</p>
              <div className='reviews__autor'>Донская Людмила Павловна</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/guseva.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Работа сотрудников очень хорошая, всё понравилось. Большое спасибо менеджеру Ангелине, даже когда закончился ее рабочий день, она со мной работала.»</p>
              <div className='reviews__autor'>Гусева Галина Викторовна</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/kotkov.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Я благодарен, что мастера старались и качественно делали. Спасибо, молодцы.»</p>
              <div className='reviews__autor'>Котков Валерий Николаевич</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/kuzmin.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>
                «Отзывы самые наилучшие! Просто очень рад был столкнуться с такой серьёзной фирмой, как «Панорама». Очень качественно всё сделали. Вопросов нет, одни благодарности. Особенно монтажнику Ивану. Живу не далеко от ТЦ «Александрия», там в вашем офисе очень добродушные девочки... сразу сказали: "Вы всё равно к нам вернётесь и лучше фирмы не найдёте" - так и получилось.»
              </p>
              <div className='reviews__autor'>Кузьмин Николай Иванович</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/romanova.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Ваши окна я заказываю уже третий раз. Быстро ставят, аккуратно, качественно. Всем советую и рекомендую.»</p>
              <div className='reviews__autor'>Романова Татьяна Викторовна</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/shevchenko.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Окно поставили хорошо. Вот ветра были сильные, ничего не продувает, все путём, сетка работает, замки работают. Все нравится. Пацаны молодцы, хорошо работали, качественно сделали. Я наблюдал за ними. Менеджеры с нами хорошо обращались, и, главное, быстро. Спасибо, если будет необходимость, мы к вам обратимся»</p>
              <div className='reviews__autor'>Шевченко Владимир Михайлович</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/shevchenko2.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Отлично! Превосходно! Монтажнику Косте пять с плюсом. Чистота, порядок. Никаких претензий. Всё за собой собрали и прибрали. У нас еще проблема с проемами была. Они как-то всё это исправили. Ребята молодцы. Виктор-замерщик тоже молодец, всё рассказал, просчитал. Еще осталось два окна поменять. На будущий год у вас закажу. Я уже сестре рекомендовала вас. Очень все хорошо, спасибо большое.»</p>
              <div className='reviews__autor'>Шевченко Татьяна Ивановна</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/zelenkova.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Ой, спасибо. Очень хорошо ребята поставили, всё чисто и аккуратно. Мне есть с чем сравнивать. Очень ваша работа нравится. Я слышала, что в «Панораме» хорошие окна, так и есть. Молодцы ребята»</p>
              <div className='reviews__autor'>Зеленкова Марина</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
          <li className='reviews__item reviews__item--hide'>
            <audio className='reviews__audio' preload='metadata'>
              <source src='/audio/zhura.mp3' type='audio/mpeg' />
            </audio>
            <button className='reviews__btn' type='button' />
            <div className='quote-box'>
              <p className='reviews__text'>«Всё отлично! Закончили быстро, даже раньше, чем было запланировано. Приехали - поставили. Работники хорошие, трезвые. Придраться не к чему. Менеджеры замечательные, общительные. Всё очень доступно объяснили.»</p>
              <div className='reviews__autor'>Журавлёва Оксана Олеговна</div>
            </div>
            <div className='reviews__btn__container'>
              <a onClick={prevReviwer} className='reviews__btn--slide reviews__pagination--prew' href='#review--top' />
              <a onClick={nextReviwer} className='reviews__btn--slide reviews__pagination--next' href='#review--top' />
            </div>
          </li>
        </ul>
        <a onClick={nextReviwer} className='reviews__pagination reviews__pagination--next--def' type='button' href='#review--top' />
        <button className='review__btn_send'>оставить свой отзыв</button>
        <div className='modal__window__reviews'>
          <div className='reviews__modal__close' />
          <h3>
            Где вы хотите
            <br />
            {' '}
            оставить свой отзыв?
          </h3>
          <div className='reviews__btn_box'>
            <a className='review__link__container yandex__link' target='_blank' href='https://yandex.ru/profile/199295468707?intent=reviews'><span className='link_to__map' /></a>
            <a className='review__link__container two-gis__link' target='_blank' href='https://go.2gis.com/frkeb'><span className='link_to__map' /></a>
            <a className='review__link__container google__link last__link' target='_blank' href='https://www.google.com/search?tbm=lcl&amp;ei=UmGyX7TYDOP4qwG_3otQ&amp;q=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;oq=%D0%BE%D0%BA%D0%BD%D0%B0+%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0+%D0%B0%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C&amp;gs_l=psy-ab.12...0.0.0.57538.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.7mGBoLNQtaAlrd=0x41a905142f5dea75:0x7b35ade4a44828c6,1,,,&amp;rlfi=hd:;si:8878193437951142086,l,CizQvtC60L3QsCDQv9Cw0L3QvtGA0LDQvNCwINCw0YHRgtGA0LDRhdCw0L3RjCIDiAEBWkkKGdC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAiLNC-0LrQvdCwINC_0LDQvdC-0YDQsNC80LAg0LDRgdGC0YDQsNGF0LDQvdGM;mv:[[46.3461937,48.069102199999996],[46.312843699999995,48.021444699999996]]'><span className='link_to__map' /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

// .reviews__item