import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: "1rem 0 1rem",
    },
    title: {
        marginBottom: "1rem",
    },
    link: {
        ...theme.blueLink
    }
}))
