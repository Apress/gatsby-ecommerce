import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Subscribe = () => {

  const data = useStaticQuery(graphql`
    query SubscribeQuery {    
      datoCmsHomepage {
        id
        subscribeFooter
        subscribeTextFooter
        subscribeButtonFooter
      }
    }
  `)

  return (
    <>        
      <div>
        <p>{data.datoCmsHomepage.subscribeFooter}</p>
        <p>{data.datoCmsHomepage.subscribeTextFooter}</p>
        <form className="SubscribeForm">
          <div className="field">
            <input name="email" placeholder="Your email" />
          </div>
          <div className="field">
            <button type="submit" style={{ marginTop: `20px` }}>{data.datoCmsHomepage.subscribeButtonFooter}</button>
          </div>
        </form>          
      </div>
    </>
  );
}

export default Subscribe