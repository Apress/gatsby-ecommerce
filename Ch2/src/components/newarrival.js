import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const newArrival = (props) => {
  return (
    <li key={props.id}>
      <Link to={`/product/${props.slug}`} className="newarrival">
        <Img fluid={props.image} />
        <h4>{props.name}</h4>
      </Link>      
    </li>
  )
}

export default newArrival;