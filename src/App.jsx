import react from 'react'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
// component two types 
// 1. functional component
// 2. class component

const App = () => {
  return (
    <>
    <Header/>
 

<section className='banner-section'>
  <img src="https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582" alt="" />

</section>

      <Footer/>
    </>
  )
}

export default App