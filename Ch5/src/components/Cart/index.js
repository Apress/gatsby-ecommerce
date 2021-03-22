import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      {checkout.lineItems.length !== 0 ? (
        <>
          <div>
            {lineItems}
          </div>
          <div className="totals">
            <h3>Subtotal</h3>
            <p>£ {checkout.subtotalPrice}</p>
          </div>
          <div className="taxes">
            <p>Taxes and delivery will be calculated on checkout</p>
            <button 
              className="checkout"
              onClick={handleCheckout}
              disabled={checkout.lineItems.length === 0}
            >
              Check out
            </button>
          </div>
        </>
      ) : (
        <p>Cart is empty!</p>
      )}
    </>
  )
}

export default Cart
