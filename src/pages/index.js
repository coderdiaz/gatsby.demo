import React from "react"
import { Link, graphql } from "gatsby"
import { withGraphql } from "gatsby-source-graphql-universal";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    demo {
      getTasks {
        title,
        description,
      }
    }
  }
`;

const IndexPage = ({ data, graphql }) => {
  graphql('demo', { query })
  return (<Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    { (data.demo.getTasks) ? data.demo.getTasks.map((task) => (
      <div style={{ marginBottom: '15px' }}>
        <h3>{task.title}</h3>
        <span>{task.description}</span>
      </div>
    )) : null }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>);
}

export default withGraphql(IndexPage)
