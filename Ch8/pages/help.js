import React from "react"
import SEO from "../components/seo"
import { Trans } from "gatsby-plugin-react-i18next"

const HelpPage = () => (
	<>
	<SEO title="Help Page" keywords={[`gatsby`, `application`, `react`]} />
  <div>
      <h1><Trans>HelpPage Title</Trans></h1>
      <p><Trans>HelpPage Description 1</Trans></p>
      <p><Trans>HelpPage Description 2</Trans></p>
  </div> 
  </>
)

export default HelpPage