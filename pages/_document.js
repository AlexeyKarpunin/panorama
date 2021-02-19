import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script type='text/javascript' src='js/script.js' />
          <script type='text/javascript' src='https://cdn.callbackkiller.com/widget/cbk.js?wcb_code=22186' charset='UTF-8' async='' />
          <link rel='stylesheet' href='https://cdn.callbackkiller.com/widget/cbk.css' />

          {/* yandex metrica */}

          <script
            dangerouslySetInnerHTML={{
              __html: `     
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(35848615, "init", {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true
		});
              `,
            }}
          />

          {/* google analytics */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
          
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-155018802-1');
              `,
            }}
          />
          
          {/*  faceBook pixel */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
          

		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '1202858799922308');
		fbq('track', 'PageView');
	
	
              `,
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
          <div className='modal__background' />
          <div id='toTop' style={{display: 'block'}} />
        </body>
      </Html>
    )
  }
}

export default MyDocument