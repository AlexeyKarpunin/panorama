export default function ChangeWindow () {
  return (
    <section className='replace'>
      <div className='replace__item replace__item1'>
        <p className='replace__title replace__title1'>Меняете окна?</p>
        <p className='replace__text replace__text1'>Если вам необходимо сменить свои старые окна или некачественные окна от застройщика</p>
        <picture className='replace__img-box'>
          <source srcSet='/img/window.webp' type='image/webp' />
          <img src='/img/window.png' alt='replace window' />	
        </picture>				
      </div>
      <div className='replace__item replace__item2'>
        <p className='replace__title replace__title2'>Нужно поставить новые?</p>
        <p className='replace__text replace__text2'>Если Вы построили дом и его необходимо застеклить качественными окнами</p>
        <picture className='replace__img-box'>
          <source srcSet='/img/home.webp' type='image/webp' />
          <img className='replace__img2' src='/img/home.png' alt='replace window' />	
        </picture>				
      </div>
    </section>
  )
}