import { createUseStyles } from "react-jss"

export default createUseStyles({
    bigContainer: {
        width: "100%",
        minHeight: "100vh",
        background: "#fbfbfb",
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        width: "75%",
        maxWidth: "1024px",
    }
})