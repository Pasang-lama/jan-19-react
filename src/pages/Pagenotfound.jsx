import React from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'

function Pagenotfound() {
  return (
    <>
    <Header/>
    <section className="container my-5">
        <h1 className="text-center text-danger">404 Page not found</h1>
        <p className='text-center'>The page you are looking for is not found</p>
    </section>
    <Footer />
    </>
  )
}

export default Pagenotfound
