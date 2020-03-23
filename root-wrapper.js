import { MDXProvider } from "@mdx-js/react"

import React from "react"

const components = {
    p: ({ children }) => (
        <h2 style={{ color: "rebeccapurple" }}>{children}</h2>
    ),

    code: props => (
        <code style={{ backgroundColor: "lightgray" }} {...props} />
    ),
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)
