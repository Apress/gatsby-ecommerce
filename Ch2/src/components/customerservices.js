import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const CustomerServices = () => {

  const data = useStaticQuery(graphql`
    query CSQuery {    
      datoCmsHomepage {
        id
        customerServiceFooter
        helpFooter
        deliveryFooter
        giftsFooter
        aboutUsFooter
        termsFooter
      }
    }
  `)

  return (
    <>
      <div>
        <ul>
          <p>Customer Service</p>
          <Link to="/help/"><li>{data.datoCmsHomepage.helpFooter}</li></Link>
          <Link to="/delivery/"><li>{data.datoCmsHomepage.deliveryFooter}</li></Link>
          <Link to="/gifts/"><li>{data.datoCmsHomepage.giftsFooter}</li></Link>
          <Link to ="/about/"><li>{data.datoCmsHomepage.aboutUsFooter}</li></Link>
          <Link to ="/terms/"><li>{data.datoCmsHomepage.termsFooter}</li></Link>
        </ul>
      </div>  
    </>
  );
}


export default CustomerServices


