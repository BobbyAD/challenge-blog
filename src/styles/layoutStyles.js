import { createUseStyles } from "react-jss"

export default createUseStyles({
    bigContainer: {
        width: "100%",
        minHeight: "100vh",
        background: "#fbfbfb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //Global Text Stuff
        lineHeight: "1.5",
        letterSpacing: ".03rem",
        "& h1": {
            fontSize: "3rem",
            fontWeight: "800",
        },
        "& h2": {
            fontSize: "1.8rem"
        },
        "& h3": {
            fontSize: "1.6rem",
        },
        "& h4": {
            fontSize: "1.3rem",
        },
        "& small": {
            fontSize: ".9rem",
            color: "#333"
        },
    },
    container: {
        width: "75%",
        maxWidth: "1024px",
    },
})
