import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
            <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
