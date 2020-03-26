import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    codeContainer: {
        padding: "1rem",
        fontFamily: "'Source Code Pro', monospace",
        margin: "1rem 0",
        borderRadius: "8px",
    },
    p: {
        margin: "1rem 0",
        '& a': {
            ...theme.blueLink
        }
    }
}))


export const codeTheme = {
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
