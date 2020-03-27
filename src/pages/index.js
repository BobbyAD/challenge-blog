import React from "react"

import { ThemeProvider } from "react-jss"
import theme from "../styles/theme"

import Layout from "../layout/layout"

import Main from "../components/main"
import SEO from "../components/seo"

const IndexPage = () => {
    return (
        <>
            <SEO />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Main />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default IndexPage
