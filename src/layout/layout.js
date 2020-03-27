import React from "react"

import Header from "../components/header"

import layoutStyles from "../styles/layoutStyles"

const Layout = ({ children }) => {
    const classes = layoutStyles()

    return (
        <div className={classes.bigContainer}>
            <div className={classes.container}>
                <Header />
                <main className={classes.main}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
