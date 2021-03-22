/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
plugins:[
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {       
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        api: 'localhost/wordpress',
        verbose: true,
        https: false,
        api_keys: {
          consumer_key: 'ck_cbe1509976fb9f603e2351eca1be47beec84a8ae',
          consumer_secret: 'cs_a207410cda4a2ab1211daacc0c4bc5661a74f149',
        },
        fields: ['products', 'products/categories', 'products/attributes']
      }
    }
	]
}
