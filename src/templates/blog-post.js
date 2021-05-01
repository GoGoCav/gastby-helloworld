import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <span css={css`color: #bbb;`}>{post.frontmatter.date}</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            html
            frontmatter {
                title
                date(formatString: "YYYY-DD-MMMM")
            }
            excerpt
        }
    }
`