export function changeAstrakhan () {
  const adress = document.querySelectorAll('.adres');
  const tel = document.querySelectorAll('.phone');
  const map = document.querySelectorAll('.iframe');
  
  adress[0].classList.remove('adres--hide');
  adress[1].classList.add('adres--hide');
  adress[2].classList.remove('adres--hide');
  adress[3].classList.add('adres--hide');
  tel[0].classList.remove('phone--hide');
  tel[1].classList.add('phone--hide');
  tel[2].classList.remove('phone--hide');
  tel[3].classList.add('phone--hide');
  tel[4].classList.remove('phone--hide');
  tel[5].classList.add('phone--hide');
  map[0].classList.remove('iframe--hide');
  map[1].classList.add('iframe--hide');
}

export function changeAtirau () {
  const adress = document.querySelectorAll('.adres');
  const tel = document.querySelectorAll('.phone');
  const map = document.querySelectorAll('.iframe');

  adress[0].classList.add('adres--hide');
  adress[1].classList.remove('adres--hide');
  adress[2].classList.add('adres--hide');
  adress[3].classList.remove('adres--hide');
  tel[0].classList.add('phone--hide');
  tel[1].classList.remove('phone--hide');
  tel[2].classList.add('phone--hide');
  tel[3].classList.remove('phone--hide');
  tel[4].classList.add('phone--hide');
  tel[5].classList.remove('phone--hide');
  map[0].classList.add('iframe--hide');
  map[1].classList.remove('iframe--hide');
}