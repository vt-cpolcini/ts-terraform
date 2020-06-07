import React from 'react'
import {graphql} from 'gatsby'

export default function Changelog({data}) {
  const {markdownRemark} = data
  const {html} = markdownRemark

  return <div dangerouslySetInnerHTML={{__html: html}} />
}

export const pageQuery = graphql`
  query {
    markdownRemark(parent: {id: {eq: "changelog"}}) {
      html
    }
  }
`
