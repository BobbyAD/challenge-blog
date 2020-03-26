import React from "react"

import SEO from "../components/seo"
import Blog from "../components/blog"
import Featured from "../components/featured"
import Bio from "../components/bio"

import "../styles/reset.css"
import "../styles/fonts.css"

import indexStyles from "../styles/indexStyles"

const IndexPage = () => {
    const classes = indexStyles()

    return (
        <div className={classes.container}>
            <div className={classes.topDiv}>
                <Bio />
                <p className={classes.description}>
                    This blog is mainly for me to write about code challenges
                    I'm doing, or projects I'm working on. Feel free to check it
                    out, or fork the project on{" "}
                    <a href="https://github.com/BobbyAD/challenge-blog">
                        Github
                    </a>{" "}
                    for your own blog. Make sure you keep an eye out for updates
                    in the future.
                </p>
            </div>
            <h2>BLOG</h2>
            <Blog />
            <h2>FEATURED</h2>
            <Featured />
        </div>
    )
}

export default IndexPage
