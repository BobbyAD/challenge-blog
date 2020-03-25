import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import mdxStyles, { codeTheme } from "../mdxStyles"

export const Code = ({ codeString, language, ...props }) => {
    const classes = mdxStyles()

    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={codeTheme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className + ' ' + classes.codeContainer} style={style}>
                    {tokens.map((line, i) => (
                        <div
                            {...getLineProps({
                                line,
                                key: i,
                            })}
                        >
                            {line.map((token, key) => {
                                // This exists to change the color of the word "return", because I like Monokai. Feel free to edit it for other words.
                                if (token.content === "return") {
                                    return (
                                        <span
                                            {...getTokenProps({ token, key })}
                                            style={{color: "#f92672"}}
                                        />
                                    )
                                } else {
                                    return (
                                        <span
                                            {...getTokenProps({ token, key })}
                                        />
                                    )
                                }
                            })}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}