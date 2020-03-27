import React from "react"

import "../styles/reset.css"
import "../styles/fonts.css"

import { ThemeProvider } from "react-jss"
import theme from "../styles/theme"

import Layout from "../layout/layout"

import Main from "../components/main"

const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Main />
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage
