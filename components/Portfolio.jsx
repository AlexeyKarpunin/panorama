import { useEffect } from "react"

export default function Portfolio() {
  
  useEffect( () => {
      const img = [
          '/img/porf/a1.jpg',
          '/img/porf/a2.jpg',
          '/img/porf/a3.jpg',
          '/img/porf/a4.jpeg',
          '/img/porf/a5.jpeg',
          '/img/porf/a6.jpeg',
          '/img/porf/a7.jpeg',
          '/img/porf/a8.jpg',
          '/img/porf/a9.jpg',
          '/img/porf/a10.jpg',
          '/img/porf/a11.jpeg',
          '/img/porf/a12.jpeg',
          '/img/porf/a13.jpeg',
          '/img/porf/a14.jpeg',
          '/img/porf/a15.jpeg',
          '/img/porf/a16.jpeg',
          '/img/porf/a17.jpg',
          '/img/porf/a18.jpg',
          '/img/porf/a19.jpg',
          '/img/porf/a20.jpg',
          '/img/porf/a21.jpg',
          '/img/porf/a22.jpg',
          '/img/porf/a23.jpg',
          '/img/porf/a24.jpg',
          '/img/porf/a25.jpg',
          '/img/porf/a26.jpg',
          '/img/porf/a27.jpg',
          '/img/porf/a28.jpg',
          '/img/porf/a29.jpg',
          '/img/porf/a30.jpg',
          '/img/porf/a31.jpg',
          '/img/porf/a32.jpg',
          '/img/porf/a33.jpg',
          '/img/porf/a34.jpg',
          '/img/porf/a35.jpg',
          '/img/porf/a36.jpeg',
          '/img/porf/a37.jpeg',
          '/img/porf/a38.jpeg',
          '/img/porf/a39.jpeg',
          ];
    
      const portfolio = document.querySelector('.portfolio');
      const item = portfolio.querySelectorAll('.portfolio__item');
      const fullImg = portfolio.querySelector('.portfolio__full-img');
      const btnNext = portfolio.querySelector('.portfolio__btn--next');
      const btnPrew = portfolio.querySelector('.portfolio__btn--prew');
    
      let count = 1;
  
    
      btnNext.addEventListener('click', () => {
    
        if (count < item.length) {
          for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('portfolio__item--active');
          }
    
          item[count].classList.add('portfolio__item--active');
          fullImg.src = img[count];
          count += 1;
        };
      });
    
      btnPrew.addEventListener('click', () => {
    
          if (count > 1) {
            for (let i = 0; i < item.length; i++) {
              item[i].classList.remove('portfolio__item--active');
            };
    
            item[count-2].classList.add('portfolio__item--active');
            fullImg.src = img[count-2];
            count -= 1;
          } else {
              count = 1;
          }
        });
    
      for (let i = 0; i < item.length; i++) {
    
        item[i].addEventListener('click', () => {
          for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('portfolio__item--active');
          }
          item[i].classList.add('portfolio__item--active');
          fullImg.src = img[i];
        });
      }
  }, [])

  return (
    <section className='portfolio'>
      <div className='portfolio__content'>
        <h2 className='portfolio__title'>
          Выполненые
          {' '}
          <span className='price__red'>проекты</span>
        </h2>
        <div className='portfolio__gallery'>
          <div className='portfolio__full-box'>
            <button className='portfolio__btn portfolio__btn--prew' type='button' data-factor='-1' />
            <button className='portfolio__btn portfolio__btn--next' type='button' data-factor='1' />
            <picture>
              <img className='portfolio__full-img' src='/img/porf/a1.jpg' alt='' />
            </picture>
          </div>
          <ul className='portfolio__list'>
            <li className='portfolio__item portfolio__item--active'>
              <img src='/img/porf/a1.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/prew/a2.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a3.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a4.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a5.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a6.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a7.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a8.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a9.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a10.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a11.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a12.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a13.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a14.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a15.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a16.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a17.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a18.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/prew/a19.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/prew/a20.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a21.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/prew/a22.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a23.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a24.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a25.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/prew/a26.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a27.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a28.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'> 
              <img src='/img/porf/a29.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a30.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a31.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a32.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a33.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a34.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a35.jpg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a36.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a37.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a38.jpeg' loading='lazy' alt='' />
            </li>
            <li className='portfolio__item'>
              <img src='/img/porf/a39.jpeg' loading='lazy' alt='' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}