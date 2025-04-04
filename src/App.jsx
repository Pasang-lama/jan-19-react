import react from 'react'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import Banner from './component/home/Banner'
import Product from './component/home/Product'

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <Footer />
    </>
  )
}

export default App