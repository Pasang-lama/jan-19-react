import React from 'react'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import Banner from './component/home/Banner'
import Product from './component/home/Product'

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <section className="container product-section my-5">
      <h1 className="text-center">Products</h1>
      <Product limit={4}/>
      </ section>
      <Footer />
    </>
  )
}

export default App