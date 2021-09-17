import Footer from '../components/Footer'
import Layout from '../components/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return(
      <>
        <Component {...pageProps} />
        <Footer />
      </>
  )
}

export default MyApp
