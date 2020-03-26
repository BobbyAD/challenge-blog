import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: 'column',
        width: "100%",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        "& a": {
            ...theme.blueLink,
        },
        "& strong": {
            fontWeight: "800",
        },
        "& p": {
            marginTop: "1.4rem",
        }
    },
}))
