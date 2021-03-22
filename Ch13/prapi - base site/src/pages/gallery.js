import React from "react"
import { graphql, Link } from "gatsby"

const GalleryPage = ({ data }) => {
  return (
    <>
      <div id="gallery-container">
        <p>Products available for sale</p>
        <ul id="gallery">
          {data.allWcProducts.edges.map(edge => {
            return (
              <React.Fragment key={edge.node.id}>
                <li>
                  <Link to={`/product/${edge.node.slug}`} aria-label={edge.node.name}>
                    <img src={edge.node.images[0].src} alt={edge.node.images[0].alt} />
                    <p>{edge.node.name}</p>
                  </Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GalleryPage;

export const GalleryQuery = graphql`
  {
    allWcProducts {
      edges {
        node {
          images {
            src
            alt
          }
          name
          price
          id
          wordpress_id
          stock_quantity
          slug
        }
      }
    }
  }
`;