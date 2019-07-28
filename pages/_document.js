import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Roboto-Light';
              font-style: normal;
              font-weight: 300;
              src: local('Roboto-Light'), local('Roboto-Light'),
                url('/static/fonts/Roboto-Light.woff2') format('woff2')
                url('/static/fonts/Roboto-Light.woff') format('woff')
                url('/static/fonts/Roboto-Light.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Roboto-Regular';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto-Regular'), local('Roboto-Regular'),
                url('/static/fonts/Roboto-Regular.woff2') format('woff2')
                url('/static/fonts/Roboto-Regular.woff') format('woff')
                url('/static/fonts/Roboto-Regular.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Roboto-Bold';
              font-style: normal;
              font-weight: 700;
              src: local('Roboto-Bold'), local('Roboto-Bold'),
                url('/static/fonts/Roboto-Bold.woff2') format('woff2')
                url('/static/fonts/Roboto-Bold.woff') format('woff')
                url('/static/fonts/Roboto-Bold.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Roboto-Black';
              font-style: normal;
              font-weight: 900;
              src: local('Roboto-Black'), local('Roboto-Black'),
                url('/static/fonts/Roboto-Black.woff2') format('woff2')
                url('/static/fonts/Roboto-Black.woff') format('woff')
                url('/static/fonts/Roboto-Black.ttf') format('truetype')
            }
        `}}/>
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
