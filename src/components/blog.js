import React from "react"
import { Link } from "gatsby"

import { useBlogs } from "../queries/useBlogs"

import mainBlogStyles from "../styles/mainBlogStyles"

const Blog = () => {
    const posts = useBlogs()
    const classes = mainBlogStyles()

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Blog</h2>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <div key={node.fields.slug}>
                        <h4>
                            <Link
                                className={classes.link}
                                to={`${node.fields.slug}`}
                            >
                                {title}
                            </Link>
                        </h4>
                        <small>{node.frontmatter.date}</small>
                        <p>{node.frontmatter.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog
