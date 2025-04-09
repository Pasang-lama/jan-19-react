import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Product({ limit }) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(json => setProduct(json))
    }, [])



    const displayedProducts = limit ? product.slice(0, limit) : product

    return (
       
            <div className="row gy-4">
                {
                    displayedProducts.map((items, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card product-card p-2">
                                <img src={items.image} className="card-img-top img-fluid" alt={items.title} />
                                <div className="card-body">
                                    <span className='badge bg-primary'>{items.category}</span>
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.description}</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <a href="#" className="btn btn-primary">Add to cart</a>
                                    <Link to={`/products/${items.id}`} className='btn btn-success'>View product</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default Product
