import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "./bio"
import Layout from "./layout"
import SEO from "./seo"
import { rhythm } from "../utils/typography"
import Button from "./button"

import { useSiteMetadata } from "../queries/useSiteMetadata"
import { useBlogs } from "../queries/useBlogs"

const Blog = () => {
    const siteMetaData = useSiteMetadata()
    const siteTitle = siteMetaData.title
    const posts = useBlogs()

    return (
        <>
            <SEO title="All posts" />
            <Bio />
            <div style={{ margin: "20px 0 40px" }}>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <div key={node.fields.slug}>
                            <h3
                                style={{
                                    marginBottom: rhythm(1 / 4),
                                }}
                            >
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={`blog${node.fields.slug}`}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </div>
                    )
                })}
            </div>
            <Link to="/">
                <Button marginTop="85px">Go Home</Button>
            </Link>
        </>
    )
}

export default Blog
