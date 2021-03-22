import React from "react"
import { Link } from "gatsby"
import payment from "../images/payment.png"

const Copyright = () => (
  <>
    <div className="copyright">
      <div>
        © Demo Cake Shop {new Date().getFullYear()}
        <Link to="/privacy/" style={{ borderLeft: `1px solid #ffffff`, paddingLeft: `5px`, marginLeft: `5px` }}>Privacy</Link>
      </div>
      <div>
        <img src={payment} alt="credit cards" style={{ height: `26px`, marginBottom: `0px` }} />
      </div>
    </div>
  </>
);

export default Copyright