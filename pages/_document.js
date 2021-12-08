import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          <div className="font_poppins select-none">
            <div id="modal-root"></div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;