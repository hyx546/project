import App from 'next/app'
import Layout from '../components/Layout'
import 'antd/dist/antd.css'

class MyApp extends App {

  static async getInitialProps({ Component, ctx}) {
    console.log('app init');
    let pageProps
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render() {
    const { Component,pageProps } = this.props
    return (
        <Layout>
          <Component {...pageProps}  />
        </Layout>
    )
  }
}

export default MyApp