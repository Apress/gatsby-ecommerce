import React from 'react'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const CatalogPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Products available for sale:</h1>
    <ProductGrid />
  </>
)

export default CatalogPage