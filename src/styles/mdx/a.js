import React from 'react'

import mdxStyles from "../mdxStyles"

export const A = props => {
    const classes = mdxStyles()

    return (
        <a {...props} className={classes.a} />
    )
}
