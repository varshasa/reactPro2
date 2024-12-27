import React from 'react'
import Carousel from './Carousel.tsx'
import ProductList from './productList.tsx'
import Header from './Header.tsx'
const Page: React.FC = () => {
  return (
    <div>
      <Header/>
     <Carousel/>
     <ProductList/>
    </div>
  )
}

export default Page
