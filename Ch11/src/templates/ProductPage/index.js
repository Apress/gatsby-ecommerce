import React from 'react'
import { graphql } from 'gatsby'

const ProductPage = ({ data }) => {
  return (
    <>
      <div id="product-page">
        <div><img src={data.wcProducts.images[0].src} alt={data.wcProducts.images[0].alt} /></div>
        <div>        
          <p>{data.wcProducts.name}</p>
          <p dangerouslySetInnerHTML={{__html: `${data.wcProducts.description}`}} />
          <p>Price: {data.wcProducts.price}</p>
          <p>{data.wcProducts.stock_quantity > 10 ? 'In stock': 'Low stock'}</p>
        </div>
      </div> 
    </>
  )
}

export default ProductPage

export const singleProduct = graphql`
  query SingleProduct($slug: String) {
    wcProducts(slug: { eq: $slug }) {
      name
      price
      description
      stock_quantity
      slug
      sku
      id
      images {
        src
        alt
      }      
    }
  }
`;

