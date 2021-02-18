const nodemailer = require('nodemailer');

export default async (req, res) => {
  const {
    solo,
    double,
    triple,
    tripleWithTwoStvorki,
    four,
    balcony,
    balconyWithStvorki,
    material,
    profile,
    glass,
    color, 
    wood, 
    woodProfile, 
    alProfile, 
    alColor, 
    otliv, 
    otkos, 
    setka,
    podokonik, 
    montage, 
    size, 
    communication, 
    tel, 
    whats,
    vk,
    inst,
    typeBanner
  } = req.body;



  const massege = `
  <ul>
    ${ solo && solo.length > 0 ? '<li>Одностворчатое: да</li>' : ''}
    ${ double ? '<li>Двустворчатое: да</li>' : ''}
    ${ triple ? '<li>Трехстворчатое: да</li>' : ''}
    ${ tripleWithTwoStvorki ? '<li>Трехстворчатое с открывающимися створками: да</li>' : ''}
    ${ four ? '<li>Четырехстворчатое: да</li>' : ''}
    ${ balcony ? '<li>Балконный блок: да</li>' : ''}
    ${ balconyWithStvorki ? '<li>Балконный блок с открывающимися створками: да</li>' : ''}
    ${ material ? `<li>Материал окна: ${material}</li>` : ''}
    ${ profile ? `<li>Профильная система: ${profile}</li>` : ''}
    ${ glass ? `<li>Стеклопакет: ${glass}</li>` : ''}
    ${ color ? `<li>Цвет: ${color}</li>` : ''}
    ${ wood ? `<li>Порода дерева: ${wood}</li>` : ''}
    ${ woodProfile ? `<li>Профильная система деревянного окна: ${woodProfile}</li>` : ''}
    ${ alProfile ? `<li>Профильная система алюминиевого окна: ${alProfile}</li>` : ''}
    ${ alColor ? `<li>Цвет алюминиевого окна: ${alColor}</li>` : ''}
    ${ otliv ? '<li>Отлив: да</li>' : ''}
    ${ otkos ? '<li>Откос: да</li>' : ''}
    ${ setka ? '<li>Сетка: да</li>' : ''}
    ${ podokonik ? '<li>Подоконник: да</li>' : ''}
    ${ montage ? `<li>Монтаж: ${montage}</li>` : ''}
    ${ size ? `<li>Размеры: ${size}</li>` : ''}
    <li>----------------communication--------------------</li>
    ${ communication ? `<li>Способ связи: ${communication}</li>` : ''}
    ${ tel ? `<li>Телефон: ${tel}</li>` : ''}
    ${ whats ? `<li>Вотсап: ${whats}</li>` : ''}
    ${ vk ? `<li>Вк: ${vk}</li>` : ''}
    ${ inst ? `<li>Инстаграм: ${inst}</li>` : ''}
    ${ typeBanner ? `<li>Тип баннера: ${typeBanner}</li>` : ''}
  </ul>
  `;
    console.log('body', req.body)
    console.log('----------------')
    console.log('solo', req.body.solo)
    console.log('----------------')
    console.log('mess', massege)
    // login: panorama.sait@gmail.com //
    // pass: panorama2021saitpass //

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'panorama.sait@gmail.com',
          pass: 'qrkisooucjpedayw' // key
        }
    });
  
    const result = await transporter.sendMail({
      from: 'Panorama.ru',
      to: 'okna@panorama30.ru, sm@panorama30.ru, m1@panorama30.ru, m2@panorama30.ru, makarovt_t@mail.ru', // info@bzcekh.ru
      subject: 'Заявка на расчет стоимости окна с сайта Панорама',
      text: 'This message was sent from Panorama.ru.',
      html: massege
    });
  
    const status = await result;
  
    if (status) {
      res.json({message: 'success'})
    } else {
      res.json({message: 'server erorr'})
    }
}



