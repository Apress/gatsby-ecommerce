import React from 'react'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import { Trans } from "gatsby-plugin-react-i18next"

const CatalogPage = () => (
  <>
    <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
    <h1><Trans>ProductsPage Title</Trans></h1>
    <ProductGrid />
  </>
)

export default CatalogPage