import Footer from '../components/Footer'
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
