const nodemailer = require('nodemailer');

export default async (req, res) => {
  const {name, phone, banner} = req.body;

  const massege = `
  <ul>
    <li>name:  ${name}</li>
    <li>phone:  ${phone}</li>
    <li>banner:  ${banner}</li>
  </ul>
  `;

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
      subject: 'Message from Panorama.ru',
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



