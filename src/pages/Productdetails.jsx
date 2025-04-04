import React, { use } from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'
import { useState, useEffect } from 'react'

function Productdetails() {

    const [product, setProduct] = useState([])
      useEffect(() => {
          fetch("https://fakestoreapi.com/products")
              .then(response => response.json())
              .then(json => setProduct(json))
      }, [])

      const result = product.find((item) => item.id === id)
    return (
        <>
            <Header />
            <section className="container my-5">
                <h1>Product details</h1>
                <div className="row gy-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8"></div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Productdetails
