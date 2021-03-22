import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import shoppingcart from "../../images/shoppingcart.svg"
import headerImage from "../../images/gatsby-icon.png"

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
    <>
  		<Wrapper>
        <header
          style={{
            background: `#a49696`,
            display: `flex`,
            justifyContent: `space-between`,
            padding: `20px 30px`
          }}
        >
          <div style={{ display: `flex`, alignItems: `center` }}>
            <img src={headerImage} alt="site header" style={{ marginBottom: `0`, width: `100px`, height: `auto`, paddingRight: `15px` }} />
            <MenuLink to='/'>
              <h1 style={{ margin: 0,  font: `400 50px/0.8 'Great Vibes'` }}>
                {siteTitle}
              </h1>
            </MenuLink>
          </div>
          
          <div style={{ color: `#ffffff`}} >
            <p>help@havecakeeatcake.com | +1-800-765-4321</p>
            <div style={{ display: `flex`, justifyContent:`flex-end`}}> 
              <MenuLink to='/cart'>
                <img src={shoppingcart} alt="shoppingcart" style={{width: `40px`, height: `auto`, fill: `#ffffff`, marginBottom: `0`, marginTop: `0.5rem` }} />
                {hasItems &&
                  <CartCounter>
                    {quantity} items
                  </CartCounter>
                }
              </MenuLink>
            </div>
          </div>  
        </header>
  		</Wrapper>
    </>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
