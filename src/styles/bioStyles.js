import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: 'column',
        width: "40%",
        "& a": {
            ...theme.blueLink
        }
    },
    image: {
        width: "100%",
    }
}))
