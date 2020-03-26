import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5% 0",
    },
    title: {
        display: "flex",
        "& a": {
            ...theme.clickable,
            padding: ".8rem",
            marginLeft: "-.8rem",
            color: "#000",
            textDecoration: "none",
        },
    },
    links: {
        display: "flex",
        "& *": {
            ...theme.clickable,
            padding: ".8rem",
            color: "#000",
        },
        "& :first-child": {
            marginLeft: "-8%",
            marginRight: "8%",
        },
    },
}))
