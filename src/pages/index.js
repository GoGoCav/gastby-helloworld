import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from  "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
    console.log(data)
    return (
        <Layout>
            <SEO title={data.site.siteMetadata.title} />
            <div>
                <h1 css={css`
                    display: inline-block;
                    border-bottom: 1px solid;
                `}>Amazing Pandas Eating Things</h1>
                <h4>
                    {data.allMarkdownRemark.totalCount} Posts
                </h4>
                { data.allMarkdownRemark.edges.map( ({ node }) => (
                    <div key={node.id}>
                        <Link 
                        to={node.fields.slug} 
                        css={css`
                            text-decoration: none;
                            color: inherit;
                        `}>
                            <h3 css={css`
                                margin-bottom: ${rhythm(1/4)};
                            `}>
                                {node.frontmatter.title}{" "}
                                <span css={css`
                                    color: #bbb;
                                `}>
                                - {node.frontmatter.date}
                                </span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
           totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-DD-MMMM")
          }
          fields {
              slug
          }
          excerpt
        }
      }
  
    }
  }
  
`