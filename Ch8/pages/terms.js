import React from "react"
import SEO from "../components/seo"
import { Trans } from "gatsby-plugin-react-i18next"

const TermsPage = () => (
	<>
    	<SEO title="Terms and Conditions" keywords={[`gatsby`, `application`, `react`]} />
  		<div>
		  <h1><Trans>TermsPage Title</Trans></h1>
		  <p><Trans>TermsPage Description 1</Trans></p>
		  <p><Trans>TermsPage Description 2</Trans></p>	    
	  </div>
	</>
)

export default TermsPage