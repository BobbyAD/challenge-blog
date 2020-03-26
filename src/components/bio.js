import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import bioStyles, { imageStyles } from "../styles/bioStyles"

function Bio() {
    const classes = bioStyles()

    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata
                return (
                    <div className={classes.container}>
                        <h2>
                            Howdy, I'm <strong>{author}</strong>.
                        </h2>
                        <p>
                            Check out my{" "}
                            <a href={`${social.website}`}>website</a>, or follow
                            my <a href={`${social.linkedin}`}>LinkedIn</a>
                        </p>
                        <p className={classes.description}>
                            This blog is mainly for me to write about code
                            challenges I'm doing, or projects I'm working on.
                            Feel free to check it out, or fork the project on{" "}
                            <a href="https://github.com/BobbyAD/challenge-blog">
                                Github
                            </a>{" "}
                            for your own blog. Make sure you keep an eye out for
                            updates in the future.
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
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
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
