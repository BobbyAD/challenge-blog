import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

export const Code = ({ codeString, language, ...props }) => {
    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
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

const sumOfTwo = () => {
    let a = 1234;
    return "asdf"
}

const theme = {
    plain: {
        color: "#f8f8f8",
        backgroundColor: "#26292c",
    },
    styles: [
        {
            types: ["prolog"],
            style: {
                color: "rgb(0, 0, 128)",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#75715e",
            },
        },
        {
            types: ["builtin", "changed", "keyword"],
            style: {
                color: "#66d9ef",
            },
        },
        {
            types: ["return"],
            style: {
                color: "#000",
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: "#ae81ff",
            },
        },
        {
            types: ["constant"],
            style: {
                color: "rgb(100, 102, 149)",
            },
        },
        {
            types: ["attr-name", "variable"],
            style: {
                color: "rgb(156, 220, 254)",
            },
        },
        {
            types: ["deleted", "string", "attr-value"],
            style: {
                color: "#e6db74",
            },
        },
        {
            types: ["selector"],
            style: {
                color: "rgb(215, 186, 125)",
            },
        },
        {
            // Fix tag color
            types: ["tag"],
            style: {
                color: "#f92672",
            },
        },
        {
            // Fix tag color for HTML
            types: ["tag"],
            languages: ["markup"],
            style: {
                color: "#66d9ef",
            },
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "rgb(212, 212, 212)",
            },
        },
        {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: "#808080",
            },
        },
        {
            types: ["function"],
            style: {
                color: "#a6e22e",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#66d9ef",
            },
        },
        {
            types: ["char"],
            style: {
                color: "rgb(209, 105, 105)",
            },
        },
    ],
}
