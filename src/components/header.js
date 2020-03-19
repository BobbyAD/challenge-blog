import React, { useEffect } from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../queries/useSiteMetadata"

import headerStyles from "../styles/headerStyles"

const Header = () => {
    const meta = useSiteMetadata()
    const classes = headerStyles()

    return (
        <div className={classes.container}>
            <div className={classes.title}>{meta.title}</div>
            <div className={classes.links}>
                <a href="https://portfolio.bobbyad.dev">Portfolio</a>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Header
