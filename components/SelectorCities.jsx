import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import {changeAstrakhan, changeAtirau} from './changeCity';
import {changeCity} from '../redux/actions';

export default function SelectorCities ({id, name, classN }) {
  const dispatch = useDispatch();
  const router = useRouter();

  function changeCityController () {
    const geo = document.querySelector(`.${classN}`);
    const selind = geo.options.selectedIndex;
    const val = geo.options[selind].value;

    if (val === 'Astrakhan') {
      localStorage.setItem( 'city', 'Astrakhan');
      dispatch(changeCity('Astrakhan'))
      geo.value = 'Astrakhan';
      changeAstrakhan();
      return;
    };

    if (val === 'Atirau') {
      localStorage.setItem( 'city', 'Atirau');
      dispatch(changeCity('Atirau'))
      geo.value = 'Atirau';
      changeAtirau()
      return;
    };
  }

  function ChangeCitySelect(e) {
    const city = e.target.value;
    if (city === 'Astrakhan') {
      const url = router.asPath.replace(/\/Atirau/, '') || '/'
      e.stopPropagation()
      router.push(`${url}`)
    }

    if (city === 'Atirau') {
      e.stopPropagation()
      router.push(`/Atirau${router.asPath}`)
    }
    
  }

  useEffect ( () => {
    const geo = document.querySelector(`.${classN}`);

    geo.addEventListener('change', changeCityController)
  }, [])

  useEffect ( () => {
    const findAtirau = router.asPath.includes('Atirau');
    const geo = document.querySelector(`.${classN}`);

    if (findAtirau) {
      changeAtirau()
      geo.value = 'Atirau';
      dispatch(changeCity('Atirau'))

    } else {
      changeAstrakhan()
      geo.value = 'Astrakhan';
      dispatch(changeCity('Astrakhan'))
      localStorage.setItem('city', 'Astrakhan')
    }

    }, [])

  return (
    <select 
      className={classN}
      onChange={ChangeCitySelect}
      name={name} 
      id={id}
    >
      <option className='header-form__option' value='Astrakhan'>Астрахань</option>
      <option className='header-form__option' value='Atirau'>Атырау</option>
    </select>
  )
}