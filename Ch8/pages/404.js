import React from 'react'
import SEO from '~/components/seo'
import { Trans } from 'gatsby-plugin-react-i18next';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" keywords={[`gatsby`, `application`, `react`]} />
	  <h1><Trans>404Page Title</Trans></h1>
	  <p><Trans>404Page Description 1</Trans></p>
  </>
)

export default NotFoundPage
