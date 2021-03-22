import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import bin from "../../../images/bin.png"

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  function calculateSubTotal(a, b) {
   return (a * b).toFixed(2)
  }

  const price =  Intl.NumberFormat(undefined, {
    currency: item.variant.priceV2.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(item.variant.priceV2.amount)

  const unitTotal = Intl.NumberFormat(undefined, {
    currency: item.variant.priceV2.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(calculateSubTotal(item.quantity, item.variant.priceV2.amount))

  return (
    <>
      <ul>
        <li><button className="remove" onClick={handleRemove}><img src={bin} alt="Remove item" className="bin"/></button></li>
        <li><Link to={`/product/${item.variant.product.handle}/`}>{variantImage}</Link></li>
        <li>
          <span>{item.title}
          {item.variant.title === !'Default Title' ? item.variant.title : ''}
          </span>
          <span>{selectedOptions} @ {price} each</span>
        </li>
        <li>{item.quantity}</li>
        <li>{unitTotal}</li>
      </ul>
    </>
  )
}

export default LineItem
