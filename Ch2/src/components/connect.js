import React from "react"
import Facebook from "../components/facebook"
import Twitter from "../components/twitter"
import Instagram from "../components/instagram"
import Pinterest from "../components/pinterest"

const Connect = () => (
  <React.Fragment>
    <div>
      <p>Connect</p>
      <section className="SocialIcons">
        <div className="level-item">
          <a href="https://www.facebook.com/havecakeeatcake" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
        </div>
        
        <div className="level-item">
          <a href="https://www.twitter.com/havecakeeatcake" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
        </div>
        
        <div className="level-item">
          <a href="https://www.instagram.com/havecakeeatcake" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
        </div>
            
        <div className="level-item">
          <a href="https://www.pinterest.com/havecakeeatcake" target="_blank" rel="noreferrer">
            <Pinterest />
          </a>
        </div>      
      </section>
    </div>        
  </React.Fragment>
);

export default Connect