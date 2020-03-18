/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata
                return (
                    <div>
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            imgStyle={{
                                borderRadius: `50%`,
                            }}
                        />
                        <p>
                            Written by <strong>{author}</strong>.{` `}
                            Check out my{" "}
                            <a href={`${social.website}`}>website</a>!
                        </p>
                    </div>
                )
            }}
        />
    )
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    website
                }
            }
        }
    }
`

export default Bio
