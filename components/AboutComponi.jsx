export default function AboutComponi () {
  return (
    <section className='about'>
      <div className='about__content container'>
        <h2 className='about__title'>О нашей компании</h2>
        <div className='about__box'>
          <div className='about__img'>
            <img src='/img/logo-panorama.svg' alt='logo' />
          </div>
          <div className='about__text-box'>
            <p className='about__text-title'>Рады приветствовать Вас на нашем сайте!</p>
            <p className='about__text'>
              Мы уже много лет работаем в этом бизнесе, но до сих пор радуемся, когда	видим свет в окнах, которые установила наша компания.
              Каждое окно - это не просто конструкция.
              Это тепло наших рук, годы опыта, репутация каждого из нас. Именно поэтому
              мы так тщательно выбираем поставщиков, бережно относимся к каждому сотруднику, внимательно следим за новыми технологиями и тенденциями.
              Каждое установленное окно для нас - это гордость за свою компанию
              и благодарность Вам за доверие.
              Сделайте выбор в пользу нашей компании, и мы обещаем, что окна «Панорама» будут радовать Вас долгие годы!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}