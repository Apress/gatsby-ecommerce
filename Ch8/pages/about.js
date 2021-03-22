import React from "react"
import SEO from "../components/seo"
import { Trans } from 'gatsby-plugin-react-i18next';


const AboutPage = () => {
	return (
	  <>
	    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
			<div>
			  <h1><Trans>AboutPage Title</Trans></h1>
			  <p><Trans>AboutPage Description 1</Trans></p>
			  <p><Trans>AboutPage Description 2</Trans></p>
			</div>
		</>
	)
}

export default AboutPage