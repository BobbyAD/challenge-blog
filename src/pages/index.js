import React from "react"

import Layout from "../layout/layout"
import Blog from "../components/blog"
import Featured from "../components/featured"
import Bio from "../components/bio"

import "../styles/reset.css"
import "../styles/fonts.css"

import indexStyles from "../styles/indexStyles"

const IndexPage = () => {
    const classes = indexStyles()

    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.topDiv}>
                    <Bio />
                </div>
                <Featured />
                <Blog />
            </div>
        </Layout>
    )
}

export default IndexPage
