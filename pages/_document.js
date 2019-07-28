import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'FiraCode-Regular';
              font-style: normal;
              font-weight: 400;
              src: local('FiraCode-Regular'), local('FiraCode-Regular'),
                url('/static/fonts/FiraCode-Regular.woff2') format('woff2')
                url('/static/fonts/FiraCode-Regular.woff') format('woff')
                url('/static/fonts/FiraCode-Regular.ttf') format('truetype')
            }
            @font-face {
              font-family: 'CutiveMono-Regular';
              font-style: normal;
              font-weight: 400;
              src: local('CutiveMono-Regular'), local('CutiveMono-Regular'),
                url('/static/fonts/CutiveMono-Regular.woff2') format('woff2')
                url('/static/fonts/CutiveMono-Regular.woff') format('woff')
                url('/static/fonts/CutiveMono-Regular.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Montserrat-Regular';
              font-style: normal;
              font-weight: 400;
              src: local('Montserrat-Regular'), local('Montserrat-Regular'),
                url('/static/fonts/Montserrat-Regular.woff2') format('woff2')
                url('/static/fonts/Montserrat-Regular.woff') format('woff')
                url('/static/fonts/Montserrat-Regular.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Montserrat-Bold';
              font-style: normal;
              font-weight: 700;
              src: local('Montserrat-Bold'), local('Montserrat-Bold'),
                url('/static/fonts/Montserrat-Bold.woff2') format('woff2')
                url('/static/fonts/Montserrat-Bold.woff') format('woff')
                url('/static/fonts/Montserrat-Bold.ttf') format('truetype')
            }
            @font-face {
              font-family: 'Montserrat-Black';
              font-style: normal;
              font-weight: 900;
              src: local('Montserrat-Black'), local('Montserrat-Black'),
                url('/static/fonts/Montserrat-Black.woff2') format('woff2')
                url('/static/fonts/Montserrat-Black.woff') format('woff')
                url('/static/fonts/Montserrat-Black.ttf') format('truetype')
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
