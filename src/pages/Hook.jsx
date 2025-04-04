import React from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'
import { useState, useEffect } from 'react'
function Hook() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])

    return (
        <>
            <Header />
            <section className="container my-5">
                <h1 className="text-center">Products</h1>
                <div className="row gy-4">
                    {
                        product.map((items, index) => (
                            <div className="col-md-4">
                                <div key={index} className="card p-5">
                                    <img src={items.image} className="card-img-top img-fluid"  alt="" />
                                    <div className="card-body">
                                        <span className='badge bg-primary'>{items.category}</span>
                                        <h5 className="card-title">{items.title}</h5>
                                        <p className="card-text">{items.description}</p>
                                    </div>
                                    <a href="" className="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Hook
