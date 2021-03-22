import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open, setOpen }) => {
  const data = useStaticQuery(graphql`
    query NavMobileQuery {    
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
        contactUsText
        contactUsLink        
      }
    }
  `)

  function closeMenu() {
    setOpen(false);
  }

  return (
    <StyledMenu open={open}>
      <Link to={`${data.datoCmsNavigation.homeLink}`} activeClassName="active" onClick={() => closeMenu()}>{data.datoCmsNavigation.homeText}</Link>
      <Link to={`${data.datoCmsNavigation.aboutLink}`} onClick={() => closeMenu()}>{data.datoCmsNavigation.aboutText}</Link>
      <Link to={`${data.datoCmsNavigation.productsLink}`} onClick={() => closeMenu()}>{data.datoCmsNavigation.productsText}</Link> 
      <Link to={`${data.datoCmsNavigation.blogLink}`} onClick={() => closeMenu()}>{data.datoCmsNavigation.blogText}</Link>
      <Link to={`${data.datoCmsNavigation.helpLink}`} onClick={() => closeMenu()}>{data.datoCmsNavigation.helpText}</Link>  
      <Link to={`${data.datoCmsNavigation.contactUsLink}`} onClick={() => closeMenu()}>{data.datoCmsNavigation.contactUsText}</Link>  
    </StyledMenu>
  )
}

export default Menu