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
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
          
              `,
            }}
          /> */}
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