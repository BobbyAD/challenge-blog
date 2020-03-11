import React from "react"

import SEO from "../components/seo"
import Button from "../components/button"
import Blog from "../components/blog"

import { ThemeProvider } from "react-jss"

const IndexPage = () => {
    const theme = {}
    const siteTitle = "Bobby's Coding Blog"

    return (
        <ThemeProvider theme={theme}>
            <div>{`${siteTitle}`}</div>
            <Blog />
        </ThemeProvider>
    )
}

export default IndexPage
