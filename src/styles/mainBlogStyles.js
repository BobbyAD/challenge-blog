import { createUseStyles } from "react-jss"

export default createUseStyles(theme => ({
    link: {
        textDecoration: "none",
        color: "red",
        border: "1px solid red",
        '& a': {
            color: "red"
        }
    }
}))
