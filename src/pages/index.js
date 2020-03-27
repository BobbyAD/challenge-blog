import React from "react"

import Blog from "../components/blog"
import Featured from "../components/featured"
import Bio from "../components/bio"

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
