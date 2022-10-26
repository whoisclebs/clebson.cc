import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript id='google ads' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4440029794243758"
     crossorigin="anonymous" />
      </body>
    </Html>
  )
}