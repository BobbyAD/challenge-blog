import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Blog from "../components/blog"

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter Personal Website"

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <Blog />
            </Layout>
        )
    }
}

export default IndexPage
