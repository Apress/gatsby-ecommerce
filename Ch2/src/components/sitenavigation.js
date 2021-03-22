import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const SiteNavigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {    
      datoCmsNavigation {
        homeText
        homeLink
        aboutText
        aboutLink
        blogText
        blogLink
        productsText
        productsLink
        helpText
        helpLink
      }
    }
  `)

  return (
    <>
      <nav>
      	<div>
          <Link to={`${data.datoCmsNavigation.homeLink}`} activeClassName="active">{data.datoCmsNavigation.homeText}</Link>
          <Link to={`${data.datoCmsNavigation.aboutLink}`}>{data.datoCmsNavigation.aboutText}</Link>
          <Link to={`${data.datoCmsNavigation.productsLink}`}>{data.datoCmsNavigation.productsText}</Link> 
          <Link to={`${data.datoCmsNavigation.blogLink}`}>{data.datoCmsNavigation.blogText}</Link>
          <Link to={`${data.datoCmsNavigation.helpLink}`}>{data.datoCmsNavigation.helpText}</Link>                 
        </div>
      </nav>
    </>
  )
}

export default SiteNavigation

