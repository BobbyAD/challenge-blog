import React from "react"

import SEO from "../components/seo"
import Button from "../components/button"
import Blog from "../components/blog"
import indexStyles from "../styles/indexStyles"

import "../styles/reset.css"
import "../styles/fonts.css"

import { ThemeProvider } from "react-jss"
import Featured from "../components/featured"

const IndexPage = () => {
    const theme = {}
    const siteTitle = "Bobby's Coding Blog"
    const classes = indexStyles()

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div className={classes.title}>{`${siteTitle}`}</div>
                BLOG
                <Blog />
                FEATURED
                <Featured />
            </div>
        </ThemeProvider>
    )
}

export default IndexPage
