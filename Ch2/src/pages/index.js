import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import NewArrival from "../components/newarrival"

import headerImage from "../images/header.png"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p><img src={headerImage} alt="header" height="326" width="920" /></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque, libero ac sodales porta, sapien massa imperdiet dolor, non sodales sapien augue ac nulla. Phasellus lorem lacus, vehicula at tortor vel, sollicitudin condimentum felis. </p>
    <h1>New Arrivals</h1>
    <ul style={{ margin: `30px 0` }}>
      {
        data.allDatoCmsCupcake.edges.map(({ node: profile }) => {
          return (
            <NewArrival 
              key={profile.id} 
              name={profile.name} 
              slug={profile.slug}
              image={profile.productImage.fluid}
            />
          )          
        })
      }
    </ul>
    <h1>Who We Are</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque, libero ac sodales porta, sapien massa imperdiet dolor, non sodales sapien augue ac nulla. Phasellus lorem lacus, vehicula at tortor vel, sollicitudin condimentum felis. Fusce eget finibus augue, eget fringilla elit. Nullam iaculis tincidunt turpis, ac condimentum risus mollis sit amet. Quisque sed faucibus nunc. Vestibulum sit amet sem non nisi tincidunt lobortis sed non turpis. Sed vehicula diam lacus, ut suscipit neque porta a. Donec pellentesque blandit ultrices. Mauris accumsan pellentesque lacus, at convallis lacus varius vel. Aliquam finibus massa ut nisl tempus egestas. Nulla nec luctus ante. Quisque urna risus, ullamcorper vitae risus id, posuere ullamcorper tortor.</p>
  </>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const NewArrivals = graphql`
  query NewArrival  {    
    allDatoCmsCupcake(filter: {newarrival: { eq: true }}, sort: { fields: [stockId], order: ASC }) {
      edges {
        node {
          id
          stockId
          name
          newarrival
          slug
          productImage {
            width
            height
            fluid(imgixParams: { fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`