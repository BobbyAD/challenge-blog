import React from "react"
import mdxStyles from "../mdxStyles"

export const P = props => {
    const classes = mdxStyles()
    return <p {...props} className={classes.p} />
}
