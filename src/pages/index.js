import React from "react"
import { ThemeProvider } from "react-jss"

import SEO from "../components/seo"
import Blog from "../components/blog"
import Layout from "../layout/layout"
import Featured from "../components/featured"
import Bio from "../components/bio"

import "../styles/reset.css"
import "../styles/fonts.css"
import indexStyles from "../styles/indexStyles"
import theme from "../styles/theme"


const IndexPage = () => {
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
