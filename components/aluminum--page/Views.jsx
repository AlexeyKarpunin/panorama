export default function Views () {
  return (
    <section className='profile-tips'>
      <h2 className='profile-tips__title'>
        Виды профильных
        {' '}
        <span className='price__red'>систем</span>
      </h2>
      <ul className='profile-tips__list container'>
        <li className='profile-tips__item profile-tips__item--1'>
          <div className='profile-tips__text-box'>
            <h3 className='profile-tips__item-title'>
              <span className='profile-tips__item-numb'>01</span>
              Холодная серия
            </h3>
            <h4 className='profile-tips__subtitle'>Алюминиевые профили без терморазрыва.</h4>
            <p className='profile-tips__text'>
              Подходят для изготовления окон, дверей, витражей, внутренних перегородок, не требующих теплоизоляции.
            </p>
            <p className='profile-tips__text'>
              Например, в неотапливаемых помещениях или между помещениями, в которых поддерживается одинаковый температурный режим
            </p>
          </div>
          <picture className='profile-tips__img'>
            <img src='/img/proftips1.png' alt='' />
          </picture>
        </li>
        <li className='profile-tips__item profile-tips__item--2'>
          <div className='profile-tips__text-box'>
            <h3 className='profile-tips__item-title profile-tips__item-title--2'>
              <span className='profile-tips__item-numb profile-tips__item-numb--2'>02</span>
              теплая
              <br />
              серия
            </h3>
            <h4 className='profile-tips__subtitle'>Алюминиевые профили с терморазрывом.</h4>
            <p className='profile-tips__text'>
              Окна, двери и другие изделия из профилей с терморазрывом применяют в наружной архитектурной застройке зданий, к которым предъявляются требования по термоизоляции.
            </p>
            <p className='profile-tips__text'>
              Это витрины и входные двери офисов и магазинов, окна и двери в жилых помещениях
            </p>
          </div>
          <picture className='profile-tips__img'>
            <img src='/img/proftips2.png' alt='' />
          </picture>
        </li>
        <li className='profile-tips__item profile-tips__item--3'>
          <div className='profile-tips__text-box'>
            <h3 className='profile-tips__item-title profile-tips__item-title--3'>
              <span className='profile-tips__item-numb profile-tips__item-numb--3'>03</span>
              фАСАДНАЯ СИСТЕМА
            </h3>
            <h4 className='profile-tips__subtitle'>Алюминиевые профили с терморазрывом.</h4>
            <p className='profile-tips__text'>
              Комплект специальных алюминиевых профилей, предназначенных для изготовления фасадов зданий, витражей, зимних садов, позволяет остеклять проемы больших размеров.
            </p>
            <p className='profile-tips__text'>
              Видимая ширина элементов системы всего 50 мм, это обеспечивает максимальную светопрозрачность и визуальную легкость фасадной конструкции
            </p>
          </div>
          <picture className='profile-tips__img'>
            <img src='/img/proftips3.png' alt='' />
          </picture>
        </li>
      </ul>
    </section>
  )
}