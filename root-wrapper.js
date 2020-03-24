import React from "react"

import { MDXProvider } from "@mdx-js/react"

import { P, Code, CodeWrapper } from "./src/styles/mdx"

const components = {
    p: props => <P {...props} />,
    // pre: ({ children: { props } }) => {
    //     console.log(props.children)
    //     if (props.mdxType === "code") {
    //         return (
    //             <div>
    //                 <Code
    //                     codeString={props.children.trim()}
    //                     language={
    //                         props.className &&
    //                         props.className.replace("language-", "")
    //                     }
    //                     {...props}
    //                 />
    //             </div>
    //         )
    //     }
    // },
    code: props => {
        console.log(props)
        return (
            <p {...props} />
        )
    }
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)