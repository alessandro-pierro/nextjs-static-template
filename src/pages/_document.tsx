import HTML from '@components/generic/html';
import Document, { Html, DocumentContext, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (Application) => (props) => sheet.collectStyles(<Application {...props} />),
        });
      };

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  /* eslint-disable */
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Set your own description" />
          <meta name="author" content="Pierro Alessandro" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </Head>
        <HTML>
          <Main />
          <NextScript />
        </HTML>
      </Html>
    );
  }
  /* eslint-enable */
}
