import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
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
