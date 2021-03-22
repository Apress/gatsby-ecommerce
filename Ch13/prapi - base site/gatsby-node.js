const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allWcProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWcProducts.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.slug}`, 
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          slug: node.slug
        }
      })
    })  
  })
}