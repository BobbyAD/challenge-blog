import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { P, Code, CodeWrapper } from "./src/styles/mdx"
import Layout from "./src/layout/layout"

import "./src/styles/reset.css"
import "./src/styles/fonts.css"

const components = {
    wrapper: ({ children }) => <>{children}</>,
    p: props => <P {...props} />,
    pre: ({ children: { props } }) => {
        if (props.mdxType === "code") {
            return (
                <div>
                    <Code
                        codeString={props.children.trim()}
                        language={
                            props.className &&
                            props.className.replace("language-", "")
                        }
                        {...props}
                    />
                </div>
            )
        }
    },
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <Layout>{element}</Layout>
    </MDXProvider>
)
