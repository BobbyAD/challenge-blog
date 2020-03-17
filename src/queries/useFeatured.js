import { graphql, useStaticQuery } from "gatsby"

export const useFeatured = () => {
    const { allMdx } = useStaticQuery(graphql`
        query featuredQuery {
            allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { featured: { eq: "true" } } }
            ) {
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
