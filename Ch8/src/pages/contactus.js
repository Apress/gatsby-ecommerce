import React from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const ContactUsPage = () => (
	<>
    	<SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
  		<div>
	    <h1>Contact Us</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque, libero ac sodales porta, sapien massa imperdiet dolor, non sodales sapien augue ac nulla.</p>
	    <ContactForm />
	  </div>
	</>
)

export default ContactUsPage