import React from "react"
import { ThemeProvider } from "react-jss"
import { MDXProvider } from "@mdx-js/react"

import {theme} from "./src/styles/theme"

import { P, Code, CodeWrapper } from "./src/styles/mdx"

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
    <ThemeProvider theme={theme}>
        <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
)
