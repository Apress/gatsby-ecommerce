import React from "react";
import { Link } from "gatsby";

const newArrival = (props) => {
  return (
    <li>
      <Link to={`/product/${props.slug}`} aria-label={props.name} className="newarrival">
        <img src={props.image} alt={props.alt} />
        <p>{props.name}</p>
      </Link>    
    </li>
  )
}

export default newArrival;