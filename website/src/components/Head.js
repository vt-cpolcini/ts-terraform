import React from 'react'
import {Helmet} from 'react-helmet'
import {useThemeUI} from 'theme-ui'

const description = 'TypeScript tooling for interacting with Terraform'

export default (props) => {
  const title = [
    props.title,
    props.pageContext.frontmatter ? props.pageContext.frontmatter.title : false,
    props._frontmatter ? props._frontmatter.title : false,
    'ts-terraform',
  ]
    .filter(Boolean)
    .join(' – ')

  const {theme} = useThemeUI()

  return (
    <Helmet htmlAttributes={{lang: 'en-US'}}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" type="image/png" href="/logo.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jacobwgillespie" />
      {/* <meta name="twitter:image" content="https://ts-terraform.dev/card.png" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content={theme.colors.background} />
    </Helmet>
  )
}
