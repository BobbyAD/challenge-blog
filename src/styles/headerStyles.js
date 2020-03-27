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
        fontWeight: "800",
        "& a": {
            ...theme.clickable,
            padding: ".8rem",
            marginLeft: "-.8rem",
            color: "#000",
            textDecoration: "none",
            display: "flex",
            alignItems:"center",
            justifyContent: 'center',
            "& span:nth-child(2)": {
                marginBottom: "-.25rem",
            }
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
