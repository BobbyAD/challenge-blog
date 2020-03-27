import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"

import blogStyles from "../styles/blogStyles"

const BlogPostTemplate = props => {
    const post = props.data.mdx
    const siteTitle = props.data.site.siteMetadata.title
    const { previous, next } = props.pageContext
    const classes = blogStyles()

    return (
        <div className={classes.container}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        mdx(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
            id
            excerpt(pruneLength: 160)
            body
        }
    }
`
