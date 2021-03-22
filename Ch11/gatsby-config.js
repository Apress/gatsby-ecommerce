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
          consumer_key: '<INSERT CONSUMER KEY HERE>',
          consumer_secret: '<INSERT CONSUMER SECRET KEY HERE>',
        },
        fields: ['products', 'products/categories', 'products/attributes']
      }
    }
	]
}
