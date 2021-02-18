export default function HeatSaving () {
  return (
    <div className='heat container'>
      <p className='heat__title'>
        Теплосбережение окон «Панорама» эквивалентно толщине кирпичной стены
      </p>
      <ul className='heat__mark-list'>
        <li className='heat__mark-item'>1 кирпич</li>
        <li className='heat__mark-item'>BLITZ NEW/EURO-Design</li>
        <li className='heat__mark-item'>SIB-Design</li>
        <li className='heat__mark-item'>GRAZIO</li>
        <li className='heat__mark-item'>DELIGHT-Design</li>
        <li className='heat__mark-item'>BRILLANT-Design</li>
        <li className='heat__mark-item'>INTELIO/INTELIO 80</li>
        <li className='heat__mark-item'>GENEO</li>
      </ul>
      <div className='heat__diff'>
        <h3 className='heat__diff-title'>Коэффициент сопротивления теплопередачи К/Вт</h3>

        <ul className='heat__diagram-list'>
          <li className='heat__diagram-item'>
            <p className='heat__diagram-title'>Панорама</p>
            <div className='heat__diagram' />
            <p className='heat__diagram-data'>0,70 / 0,93</p>
          </li>
          <li className='heat__diagram-item'>
            <p className='heat__diagram-title'>Обычный стеклопакет</p>
            <div className='heat__diagram heat__diagram--2' />
            <p className='heat__diagram-data'>0,35 / 0,50</p>
          </li>
        </ul>
      </div>
    </div>
  )
}