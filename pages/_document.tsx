import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="prefetch"
          href="/fonts/LexendDecaVariableFont.woff2"
          as="font"
          type="font/woff2"
          cross-origin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@font-face{font-family:'Lexend Deca';font-style:normal;font-display:swap;font-weight:100 900;src:url('/fonts/LexendDecaVariableFont.woff2') format('woff2');}"
          }}
        />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
