import React from 'react'
import headerStyles from "../styles/headerStyles"
import { Link } from 'gatsby'

const Header = () => {
    const classes = headerStyles()
    return (
        <div className={classes.container}>
            <div className={classes.title}>Title</div>
            <div className={classes.links}>
                <a href="https://portfolio.bobbyad.dev">Portfolio</a>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default Header
