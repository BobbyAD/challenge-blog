import React from 'react'

import Header from "../components/header"

import layoutStyles from "../styles/layoutStyles"

const Layout = ({ children }) => {
    const classes = layoutStyles()

    return (
        <div className={classes.container}>
            <Header />
            <main>{children}</main>
        </div>
    )
}



export default Layout
