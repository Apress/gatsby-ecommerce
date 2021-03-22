import React from "react"
import Sidebar from "./sidebar"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import SEO from "../components/seo"

export default function Index({ data }) {

  const { edges: posts } = data.allMarkdownRemark;
  return (
    <>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Blog</h1>
      <div style = {{ display: 'flex' }}>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h2>
                  <span className="published">published {post.frontmatter.date} by {post.frontmatter.author}</span>
                  <p>{post.excerpt}</p>
                </div>
              );
            })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <Sidebar
            title="About Author"
            description="Phasellus a ex scelerisque, cursus mi eu, vehicula risus. Ut ac pharetra ipsum. Ut tortor sem, laoreet non cursus vel, imperdiet at nisi."
          />
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
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
    }
  }
`;
