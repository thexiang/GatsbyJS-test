import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SheetTabs from '../components/SheetTabs'

export default ({ data }) => {

  const { datoCmsWork } = data

  return (
    <Layout>
      <article className="sheet">
        <HelmetDatoCms seo={datoCmsWork.seoMetaTags} />
        <div className="sheet__inner">
          <h1 className="sheet__title">{datoCmsWork.title}</h1>
          <p className="sheet__lead">{datoCmsWork.excerpt}</p>

          {
            datoCmsWork.enableTabs
            &&
            <SheetTabs datoCmsWork={datoCmsWork}/>
          }

          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: datoCmsWork.descriptionNode.childMarkdownRemark.html,
            }}
          />

        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      dataset {
        column
        data
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      introNode {
        childMarkdownRemark {
          html
        }
      }
      enableTabs
    }
  }
`
