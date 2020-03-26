import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import bioStyles from "../styles/bioStyles"

function Bio() {
    const classes = bioStyles()

    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata
                return (
                    <div className={classes.container}>
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={`Image of ${author}`}
                            className={classes.image}
                        />
                        <p>
                            Hey, I'm <strong>{author}</strong>.{` `}
                            Check out my{" "}
                            <a href={`${social.website}`}>website</a>
                            , or follow my{" "}
                            <a href={`${social.linkedin}`}>LinkedIn</a>
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
