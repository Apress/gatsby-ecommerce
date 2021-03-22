import React from "react"
import SEO from "../components/seo"
import { Trans } from "gatsby-plugin-react-i18next"

const DeliveryPage = () => (
	<>
  		<SEO title="Delivery Page" keywords={[`gatsby`, `application`, `react`]} />
		  <div>
			  <h1><Trans>DeliveryPage Title</Trans></h1>
			  <p><Trans>DeliveryPage Description 1</Trans></p>
			  <p><Trans>DeliveryPage Description 2</Trans></p>		    
		  </div>
	</>
)

export default DeliveryPage