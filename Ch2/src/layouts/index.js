import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Copyright from "../components/copyright"
import Subscribe from "../components/subscribe"
import CustomerServices from "../components/customerservices"
import Connect from "../components/connect"
import SiteNavigation from "../components/sitenavigation"

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import "./layout.css"
import "typeface-open-sans"
import "typeface-great-vibes"


const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <SiteNavigation />
            <Wrapper>
              {children}
            </Wrapper>
            <footer>
              <CustomerServices />
              <Subscribe />
              <Connect />
            </footer>
            <Copyright />            
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
