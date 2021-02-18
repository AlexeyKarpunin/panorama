import { useEffect } from 'react'

export default function Constructor () {

  useEffect( () => {
      const btnJal = document.querySelector('.btn-jal-js');
      const btnRol = document.querySelector('.btn-rol-js');
      const fullJal = document.querySelector('.full-jal-js');
      const fullRol = document.querySelector('.full-rol-js');
      const listJal = document.querySelector('.list-jal-js');
      const listRol = document.querySelector('.list-rol-js');
    
    
      btnJal.addEventListener('click', () => {
        btnJal.classList.add('jaluzi-constructor__btn--active');
        btnRol.classList.remove('jaluzi-constructor__btn--active');
        fullJal.classList.remove('jaluzi-constructor__pic--hide');
        fullRol.classList.add('jaluzi-constructor__pic--hide');
        listJal.classList.remove('jaluzi-constructor__list--hide');
        listRol.classList.add('jaluzi-constructor__list--hide');
      });
    
      btnRol.addEventListener('click', () => {
        btnJal.classList.remove('jaluzi-constructor__btn--active');
        btnRol.classList.add('jaluzi-constructor__btn--active');
        fullJal.classList.add('jaluzi-constructor__pic--hide');
        fullRol.classList.remove('jaluzi-constructor__pic--hide');
        listJal.classList.add('jaluzi-constructor__list--hide');
        listRol.classList.remove('jaluzi-constructor__list--hide');
      });

        const overlay = document.getElementById('path-constr');
        const overlay2 = document.getElementById('path-constr2');
        const overlay1 = document.getElementById('path-constr1');
        const overlay22 = document.getElementById('path-constr22');
        // Click on a color
      
        const el1 = document.getElementsByClassName('jaluzi-constructor__color');
        for (let i = 0; i < el1.length; i++) {
          el1[i].onclick = changeColor;
        }
      
        const el2 = document.getElementsByClassName('jaluzi-constructor__color2');
        for (let i = 0; i < el2.length; i++) {
          el2[i].onclick = changeColor2;
        }
      
        function changeColor(e) {
          // get the hex color
          const hex = e.target.getAttribute('data-hex');
          // set the hex color
          overlay.style.fill = hex;
          overlay1.style.fill = hex;
        }
      
        function changeColor2(e) {
          // get the hex color
          const hex = e.target.getAttribute('data-hex');
          // set the hex color
          overlay2.style.fill = hex;
          overlay22.style.fill = hex;
        }
      
  }, [])
  return (
    <section className='jaluzi-constructor' id='constructor'>
      <div className='jaluzi-constructor__content container'>
        <h2 className='jaluzi-constructor__title'>
          Конструктор 
          {' '}
          <span className='price__red'>жалюзи и рольшторы</span>
        </h2>

        <picture className='jaluzi-constructor__pic full-jal-js' id='cont'>
          <svg className='jaluzi-constructor__svg jaluzi-constructor__svg--2' id='svg-constr' xmlns='https://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='290' height='290' viewBox='0 0 598 598'>
            <path className='jaluzi-constructor__svg-path' id='path-constr22' d='M174.5 349.56h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.66-18.65h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H169.69l4.15-8.5zm.66-20.16h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.33-20.25h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H170.02l4.15-8.5zm1.13-20.06h264l5.5 8.5H171.14l4.16-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.8-19.66h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm1.12-20.15h264.01l5.5 8.5H171.47l4.15-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330.01 0h56.5l5.5 8.5h-62v-8.5zM444 210.97h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm269.17-19.75h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H170.02l4.15-8.5zm0-21.34h264l5.5 8.5H170.02l4.15-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm.33-17.85h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm0-21.34h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm0-18.85h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm0-21.34h264L444 99H170.34l4.16-8.5zm-60.5 0h54.5V99H109l5-8.5zm330 0h56.5L506 99h-62v-8.5z' />
          </svg>
          <svg className='jaluzi-constructor__svg jaluzi-constructor__svg--2 jaluzi-constructor__svg--big' id='svg-constr' xmlns='https://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='598' height='598'>
            <path className='jaluzi-constructor__svg-path' id='path-constr2' d='M174.5 349.56h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.66-18.65h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H169.69l4.15-8.5zm.66-20.16h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.33-20.25h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H170.02l4.15-8.5zm1.13-20.06h264l5.5 8.5H171.14l4.16-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm-.8-19.66h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm1.12-20.15h264.01l5.5 8.5H171.47l4.15-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330.01 0h56.5l5.5 8.5h-62v-8.5zM444 210.97h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm269.17-19.75h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5h-59.5l5-8.5zm60.5 0h264l5.5 8.5H170.02l4.15-8.5zm0-21.34h264l5.5 8.5H170.02l4.15-8.5zm-60.5 0h54.5v8.5h-59.5l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm.33-17.85h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm0-21.34h264l5.5 8.5H170.34l4.16-8.5zm-60.5 0h54.5v8.5H109l5-8.5zm330 0h56.5l5.5 8.5h-62v-8.5zm0-18.85h56.5l5.5 8.5h-62v-8.5zm-330 0h54.5v8.5H109l5-8.5zm60.5 0h264l5.5 8.5H170.34l4.16-8.5zm0-21.34h264L444 99H170.34l4.16-8.5zm-60.5 0h54.5V99H109l5-8.5zm330 0h56.5L506 99h-62v-8.5z' />
          </svg>
          <img className='jaluzi-constructor__full-img' id='background-image' src='/img/test.png' width='598' height='598' alt='' />
        </picture>

        <picture className='jaluzi-constructor__pic full-rol-js jaluzi-constructor__pic--hide'>
          <svg 
            className='jaluzi-constructor__svg' 
            id='svg-constr'
            xmlns='https://www.w3.org/2000/svg' 
            xmlnsXlink='http://www.w3.org/1999/xlink' 
            width='290' 
            height='290' 
            viewBox='0 0 614 614'
          >
            <path 
              className='jaluzi-constructor__svg-path' 
              id='path-constr1' 
              d='M131.01 70.83l-1.33-3.01-.95-3.59.95-4.21 2.15-3.9H485.4l1.4 5.5v5l-.8 6v379.6l-352.1-1.1-2.89-380.29z'
            />
          </svg>
          <svg className='jaluzi-constructor__svg jaluzi-constructor__svg--big' id='svg-constr' xmlns='https://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='614' height='614'>
            <path className='jaluzi-constructor__svg-path' id='path-constr' d='M131.01 70.83l-1.33-3.01-.95-3.59.95-4.21 2.15-3.9H485.4l1.4 5.5v5l-.8 6v379.6l-352.1-1.1-2.89-380.29z' />
          </svg>
          <img className='jaluzi-constructor__full-img' id='background-image' src='/img/full-jaluzi.png' alt='' />
        </picture>

        <div className='jaluzi-constructor__list-box'>
          <button className='jaluzi-constructor__btn btn-jal-js jaluzi-constructor__btn--active' type='button'>
            Жалюзи
            <span className='jaluzi-constructor__btn--span'>от 900 руб. за шт.</span>
          </button>
          <button className='jaluzi-constructor__btn btn-rol-js' type='button'>
            Рольшторы
            <span className='jaluzi-constructor__btn--span'>от 1900 руб. за шт.</span>
          </button>
          <ul className='jaluzi-constructor__list list-jal-js'>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#f06008'}} data-hex='#f06008' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#ed8342'}} data-hex='#ed8342' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#f2a170'}} data-hex='#f2a170' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#f6ba96'}} data-hex='#f6ba96' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#e50f0f'}} data-hex='#e50f0f' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#df4545'}} data-hex='#df4545' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#f47171'}} data-hex='#f47171' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#fdb6b6'}} data-hex='#fdb6b6' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#1a237e'}} data-hex='#1a237e' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#304ed5'}} data-hex='#304ed5' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#4e68db'}} data-hex='#4e68db' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#8a9ced'}} data-hex='#8a9ced' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#004d40'}} data-hex='#004d40' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#00695c'}} data-hex='#00695c' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#00897b'}} data-hex='#00897b' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#26a69a'}} data-hex='#26a69a' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: ' #37474f'}} data-hex='#37474f' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#546E7A'}} data-hex='#546E7A' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#78909C'}} data-hex='#78909C' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#b0bec5'}} data-hex='#b0bec5' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#b2dfdb'}} data-hex='#b2dfdb' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#e1bee7'}} data-hex='#e1bee7' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color2' style={{backgroundColor: '#e1e851'}} data-hex='#e1e851' />
            </li>
          </ul>
          <ul className='jaluzi-constructor__list list-rol-js jaluzi-constructor__list--hide'>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#f06008'}} data-hex='#f06008' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#ed8342'}} data-hex='#ed8342' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#f2a170'}} data-hex='#f2a170' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#f6ba96'}} data-hex='#f6ba96' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#e50f0f'}} data-hex='#e50f0f' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#df4545'}} data-hex='#df4545' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#f47171'}} data-hex='#f47171' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#fdb6b6'}} data-hex='#fdb6b6' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#1a237e'}} data-hex='#1a237e' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#304ed5'}} data-hex='#304ed5' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#4e68db'}} data-hex='#4e68db' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#8a9ced'}} data-hex='#8a9ced' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#004d40'}} data-hex='#004d40' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#00695c'}} data-hex='#00695c' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#00897b'}} data-hex='#00897b' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#26a69a'}} data-hex='#26a69a' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#37474f'}} data-hex='#37474f' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#546E7A'}} data-hex='#546E7A' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#78909C'}} data-hex='#78909C' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#b0bec5'}} data-hex='#b0bec5' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#b2dfdb'}} data-hex='#b2dfdb' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#e1bee7'}} data-hex='#e1bee7' />
            </li>
            <li className='jaluzi-constructor__item'>
              <div className='jaluzi-constructor__color' style={{backgroundColor: '#e1e851'}} data-hex='#e1e851' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}