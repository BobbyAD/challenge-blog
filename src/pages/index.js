import React from "react"

import Layout from "../layout/layout"

import Main from "../components/main"
import SEO from "../components/seo"

const IndexPage = () => {
    return (
        <>
            <SEO />
            <Layout>
                <Main />
            </Layout>
        </>
    )
}

export default IndexPage
