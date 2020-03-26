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
            </div>
            <Featured />
            <Blog />
        </div>
    )
}

export default IndexPage
