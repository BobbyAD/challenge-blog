import React from "react"

import { ThemeProvider } from "react-jss"
import theme from "../styles/theme"

import Header from "../components/header"

import layoutStyles from "../styles/layoutStyles"

const Layout = ({ children }) => {
    const classes = layoutStyles()

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.bigContainer}>
                <div className={classes.container}>
                    <Header />
                    <main className={classes.main}>{children}</main>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Layout
