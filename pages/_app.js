/* eslint-disable no-restricted-syntax */
import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/libs.min.css';
import '../styles/style.min.css';

import { Provider } from 'react-redux';

import $ from 'jquery';
import { useEffect } from 'react';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {

  useEffect( () => {
    $(() => {
      
      $(window).scroll(function() {
        if($(this).scrollTop() !== 0) {
          $('#toTop').fadeIn();
        } else {
          $('#toTop').fadeOut();
        }
      });
    
      $('#toTop').click(() => {
        $('body,html').animate({scrollTop:0},800);
      });
    });

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (const anchor of anchors) {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector(`${  blockID}` ).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
        });
    }
  
  }, [Component])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
