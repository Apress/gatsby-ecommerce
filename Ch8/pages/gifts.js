import React from "react"
import SEO from "../components/seo"
import { Trans } from "gatsby-plugin-react-i18next"

const GiftsPage = () => (
  <>
	    <SEO title="Gifts" keywords={[`gatsby`, `application`, `react`]} />
		<div>
	   	    <h1><Trans>GiftsPage Title</Trans></h1>
			<p><Trans>GiftsPage Description 1</Trans></p>
			<p><Trans>GiftsPage Description 2</Trans></p>	    
		</div> 
	</>
)

export default GiftsPage