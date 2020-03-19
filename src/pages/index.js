import React from "react"

import SEO from "../components/seo"
import Button from "../components/button"
import Blog from "../components/blog"
import indexStyles from "../styles/indexStyles"
import Layout from "../layout/layout"

import "../styles/reset.css"
import "../styles/fonts.css"

import { ThemeProvider } from "react-jss"
import Featured from "../components/featured"
import Bio from "../components/bio"

const IndexPage = () => {
    const theme = {}
    const classes = indexStyles()

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default IndexPage
