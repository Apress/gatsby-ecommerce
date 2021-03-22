import React from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import { Trans } from "gatsby-plugin-react-i18next"

const ContactUsPage = () => (
	<>
    	<SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
  		<div>
		  <h1><Trans>ContactUsPage Title</Trans></h1>
		  <p><Trans>ContactUsPage Description 1</Trans></p> 		
	    <ContactForm />
	  </div>
	</>
)

export default ContactUsPage