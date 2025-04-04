import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'


function Product() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])

    return (
        <>
            <section className="container product-section my-5">
                <h1 className="text-center">Products</h1>
                <div className="row gy-4">
                    {
                        product.map((items, index) => (
                            <div className="col-md-4">
                                <div key={index} className="card product-card p-5">
                                    <img src={items.image} className="card-img-top img-fluid" alt="" />
                                    <div className="card-body">
                                        <span className='badge bg-primary'>{items.category}</span>
                                        <h5 className="card-title">{items.title}</h5>
                                        <p className="card-text">{items.description}</p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a href="" className="btn btn-primary">Add to cart</a>
                                        <Link to={`/products/${items.id}`}  className='btn btn-success'>View product</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </>
    )
}

export default Product
