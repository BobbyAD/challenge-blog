import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
        margin: "5% 0",
    },
    links: {
        display: "flex",
        "& *": {
            ...theme.clickable,
            padding: ".8rem",
            textDecoration: 'none',
            color: "#000",
        },
        "& :first-child": {
            marginLeft: "-8%",
            marginRight: "8%",
        }
    },
}))
