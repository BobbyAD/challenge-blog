import { graphql, useStaticQuery } from "gatsby"

export const useBlogs = () => {
    const { allMdx } = useStaticQuery(graphql`
        query blogQuery {
            allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                    node {
                        excerpt
                        fields {
                            slug
                        }
                        frontmatter {
                            date(formatString: "MMMM DD, YYYY")
                            title
                            description
                        }
                    }
                }
            }
        }
    `)
    return allMdx.edges
}