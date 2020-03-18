import React from "react"
import { Link } from "gatsby"

import { useBlogs } from "../queries/useBlogs"

const Blog = () => {
    const posts = useBlogs()

    return (
        <>
            <div style={{ margin: "20px 0 40px" }}>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <div key={node.fields.slug}>
                            <h3>
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={`${node.fields.slug}`}
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
        </>
    )
}

export default Blog
