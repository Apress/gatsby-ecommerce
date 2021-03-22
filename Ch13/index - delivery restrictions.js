import React from 'react'
import { graphql } from 'gatsby'

let grandtotal = 0

const options = {
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestShipping: true
};

// const deliveryOptions = {
//   free: 0.00,
//   standard: 5.00,
//   express: 12.00
// }

const paymentMethods = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard"],
      supportedTypes: ["debit", "credit"]
    }
  }
];

function buildShoppingCart(data) {
  let grandtotal = Number(data.wcProducts.price) + Number(data.wcProducts.price * 0.1);


  return {
    id: data.wcProducts.id,
    displayItems: [
      {
        label: data.wcProducts.name,
        amount: {
          currency: "USD",
          value: data.wcProducts.price
        }
      },  {
        label: 'Sales Tax',
        pending: true,
        amount: { 
          currency: 'USD',
          value: Number(data.wcProducts.price * 0.1).toFixed(2)
        }
      }
    ],
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: grandtotal,
      }
    },
    // shippingOptions: [
    //   {
    //     id: 'free',
    //     label: 'Free Shipping (USA only)',
    //     amount: {currency: 'USD', value: deliveryOptions.free},
    //     selected: true,
    //   },
    //   {
    //     id: 'standard',
    //     label: 'Standard shipping',
    //     amount: {currency: 'USD', value: deliveryOptions.standard},
    //     selected: true,
    //   },
    //   {
    //     id: 'express',
    //     label: 'Express shipping',
    //     amount: {currency: 'USD', value: deliveryOptions.express},
    //   },
    // ],
  };
}

async function displaySuccess() {
  document.getElementById("message").classList.add("success");
  document.getElementById("message").innerHTML = "<span>\u2714</span> Payment received - thanks for your order!";   
}

function displayMessage(mesg) {
  document.getElementById("message").classList.add("info");
  document.getElementById("message").innerHTML = "<span>&#128712;</span>" + mesg;  
}

// function updateDetails(pr, details, shippingOption, resolve, reject, stotal, price) {
//   if (shippingOption === 'standard') {
//     pr.selectedShippingOption = details.shippingOptions[0];
//     pr.otherShippingOption = details.shippingOptions[1];
//     details.total.amount.value = Number(price) + Number(deliveryOptions.standard);
//   } else if (shippingOption === 'express') {
//     pr.selectedShippingOption = details.shippingOptions[1];
//     pr.otherShippingOption = details.shippingOptions[0];
//     details.total.amount.value = Number(price) + Number(deliveryOptions.express);
//   } else {
//     reject('Unknown shipping option \'' + shippingOption + '\'');
//     return;
//   }
//   pr.selectedShippingOption.selected = true;
//   pr.otherShippingOption.selected = false;

//   details.displayItems.splice(2, 1, pr.selectedShippingOption);
//   resolve(details);
// }

function updateDetails(details, shippingAddress, callback, stotal) {
  let shippingOption = {
    id: '',
    label: '',
    amount: {currency: 'USD', value: '0.00'},
    selected: true,
    pending: false,
  };
  if (shippingAddress.country === 'US') {
    if (shippingAddress.region === 'CA') {
      shippingOption.id = 'californiaFreeShipping';
      shippingOption.label = 'Free shipping in California';
      details.total.amount.value = (Number(stotal)).toFixed(2);
    } else {
      shippingOption.id = 'unitedStatesStandardShipping';
      shippingOption.label = 'Standard shipping in US';
      shippingOption.amount.value = '3.99';
      details.total.amount.value = (Number(stotal) + Number(3.99)).toFixed(2);
    }
    details.shippingOptions = [shippingOption];
    delete details.error;
  } else {
    // Don't ship outside of US for the purposes of this example.
    shippingOption.label = 'Shipping';
    shippingOption.pending = true;
    details.total.amount.value = (Number(stotal)).toFixed(2);
    details.error = 'Sorry - cannot ship outside of USA.';
    delete details.shippingOptions;
  }
  details.displayItems.splice(1, 1, shippingOption);
  callback(details);
}

async function buyItem(data) {
  try {
    const paymentObject = buildShoppingCart(data);
    const payment = new PaymentRequest(paymentMethods, paymentObject, options);
    
    // payment.addEventListener('shippingoptionchange', function(evt) {
    //   evt.updateWith(new Promise(function(resolve, reject) {
    //     updateDetails(payment, paymentObject, payment.shippingOption, resolve, reject, grandtotal, data.wcProducts.price);
    //   }));
    // });

    payment.addEventListener('shippingaddresschange', function(evt) {
      evt.updateWith(new Promise(function(resolve) {
        updateDetails(paymentObject, payment.shippingAddress, resolve, grandtotal);
      }));
    });

    // Show the UI
    const paymentUi = await payment.show();
    // If payment is successful run here.
    await paymentUi.complete("success").then(function() {
      console.log(JSON.stringify(paymentUi));
      displaySuccess();
    });      
  } catch (e) {
    displayMessage(e.message);
    return;
  }
}

const ProductPage = ({ data }) => {
  return (
    <>
      <div id="product-page">
        <div><img src={data.wcProducts.images[0].src} alt={data.wcProducts.images[0].alt} /></div>
        <div>        
          <p>{data.wcProducts.name}</p>
          <p dangerouslySetInnerHTML={{__html: `${data.wcProducts.description}`}} />
          <p>Price: ${data.wcProducts.price}</p>
          <div style={{"display": "flex", "justifyContent": "space-between"}}>
            <p>{data.wcProducts.stock_quantity > 10 ? 'In stock': 'Low stock'}</p>
            <button
              className="oneclick"
              onClick={() => buyItem(data)}
              type="button"
            >
              One-Click Buy
            </button>
          </div>
          <div id="message" />
        </div>
      </div> 
    </>
  )
}

export default ProductPage

export const singleProduct = graphql`
  query SingleProduct($slug: String) {
    wcProducts(slug: { eq: $slug }) {
      name
      price
      description
      stock_quantity
      slug
      sku
      id
      images {
        src
        alt
      }      
    }
  }
`;

