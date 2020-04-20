import Document, { Html, Head,Main, NextScript} from 'next/document'
import { Component } from 'react'
import { ServerStyleSheet } from 'styled-components';


// HOC
// function withLog (Comp) {
//   return (props) => {
//     console.log(props);
//     return <Comp {...props}></Comp>
//   }
// }

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => (props) => sheet.collectStyles(<App {...props} /> )
      })
      const props = await Document.getInitialProps(ctx)
      return {
        ...props,
        styles: <>{props.styles}{sheet.getStyleElement()}</>
      }
    }finally {
      sheet.seal()
    }

    // const originalRenderPage = ctx.renderPage
    // ctx.renderPage = () => originalRenderPage ({
    //   enhanceApp: App => App,
    //   enhanceComponent: Component => withLog(Component)
    // })
  }
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default  myDocument