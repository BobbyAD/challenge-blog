import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: 'column',
    },
    topDiv: {
        display: "flex",
    },
    description: {
        width: "60%",
        "& a": {
            ...theme.blueLink
        }
    }
}))


