import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Template({  data }) {  
	const post = data.markdownRemark;   

  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

	return (    
    <>
  		<div className="blog-post-container">     
  		<Helmet title={`HaveCakeEatCake - ${post.frontmatter.title}`} />      
  		<div className="blog-post">        
  			<h3>{post.frontmatter.title}</h3> 
        <span className="published">published {post.frontmatter.date} by {post.frontmatter.author}</span>
      	<Img fluid={featuredImgFluid} />
  			<div        
  				className="blog-post-content"          
  				dangerouslySetInnerHTML={{ __html: post.html }}        
  			/>      
  			</div>    
  		</div>  
    </>
	);
}

export const pageQuery = graphql`  
	query BlogPostByPath($path: String!) {    
		markdownRemark(frontmatter: { path: { eq: $path } }) {
      html      
      frontmatter {        
      	date(formatString: "MMMM DD, YYYY")        
      	path        
      	title      
        author 
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }                
      }
	  }  
	}
`;