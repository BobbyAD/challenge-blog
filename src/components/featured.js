import React from "react"
import { Link } from "gatsby"

import { useFeatured } from "../queries/useFeatured"

import mainBlogStyles from "../styles/mainBlogStyles"

const Featured = () => {
    const posts = useFeatured()
    const classes = mainBlogStyles()

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Featured</h2>
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

export default Featured
