import React from "react"

import SEO from "../components/seo"
import Blog from "../components/blog"
import Layout from "../layout/layout"
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
                    <div>
                        <p>Description goes here</p>
                        <Bio />
                    </div>
                    BLOG
                    <Blog />
                    FEATURED
                    <Featured />
                </div>
            </Layout>
    )
}

export default IndexPage
