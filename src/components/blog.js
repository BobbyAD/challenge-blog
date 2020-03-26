import React from "react"
import { Link } from "gatsby"

import { useBlogs } from "../queries/useBlogs"

import mainBlogStyles from "../styles/mainBlogStyles"

const Blog = () => {
    const posts = useBlogs()
    const classes = mainBlogStyles()

    return (
        <>
            <div style={{ margin: "20px 0 40px" }}>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <div key={node.fields.slug}>
                            <h3>
                                <Link
                                    className={classes.link}
                                    to={`${node.fields.slug}`}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p>{node.frontmatter.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog
