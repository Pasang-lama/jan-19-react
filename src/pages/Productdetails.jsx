import React, { use } from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function Productdetails() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])
    const result = product.find((item) => item.id == id)

    return (
        <>
            <Header />
            <section className="container my-5">
                <h1 className='bg-success p-2 text-light fs-4 mb-5'>{result?.title}</h1>
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <figure>
                            <img src={result?.image} alt="" className='img-fluid' />
                        </figure>
                    </div>
                    <div className="col-lg-8">
                        <span className='badge bg-info'>{result?.category}</span> <span>({result?.rating?.rate})({result?.rating?.count})</span>
                        <h2 className='fw-bold fs-2'>{result?.title}</h2>
                        <span className='fw-bold text-uppercase '>USD.${result?.price}</span>
                        <hr />
                        <p className='mt-5'>{result?.description}</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Productdetails
