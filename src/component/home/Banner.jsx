import React from 'react'
import '../../scss/pages/home.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    alldevice: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
};

function Banneritems(props) {
    return (
        <div className="slide-items">
            <img src={props.data.images} alt="" />
            <div className="banner-details">
                <div className="heading">{props.data.heading}</div>
                <div className="sub-heading">{props.data.sub_heading}</div>
                <a href="" className="custom-btn">Shop Now</a>
            </div>
        </div>
    )
}

function Banner() {
    const banner_data = [
        {
            id: 1,
            images: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582",
            heading: "MAN Bags",
            sub_heading: "New Men's Collection",
        },
        {
            id: 2,
            images: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_2.jpg?v=1613716582",
            heading: "New Style",
            sub_heading: "Boot's  Collection for men",
        }

    ]
    return (
        <section className='banner-section'>
            <Carousel responsive={responsive}>
            {
                banner_data.map((items, index) => {
                    return <Banneritems data={items} key={index} />
                })
            }
            </Carousel>
        </section>
    )
}

export default Banner
