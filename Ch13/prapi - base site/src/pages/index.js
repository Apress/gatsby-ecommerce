import React from "react"
import { graphql, Link } from "gatsby"
import NewArrival from "../components/NewArrival"

const IndexPage = ({ data }) => {
  return (
    <>
      <p><Link to='/gallery' aria-label='product-gallery'>Products</Link></p>
      <p>New Arrivals</p>
      <ul id="newarrivals">
        {data.wcProductsCategories.products.map(product => {
          return (
            <NewArrival
              key={product.id} 
              name={product.name} 
              slug={product.slug}
              image={product.images[0].src}
              alt={product.images[0].alt}
            />
          );
        })}
      </ul>
    </>
  );
};

export default IndexPage;

export const newArrivalsQuery = graphql`
  {
    wcProductsCategories(wordpress_id: {eq: 18}) {
      products {
        name
        price
        slug
        id
        images {
          src
          alt
        }
      }
    }
  }
`;