/** @jsx jsx */
import {AccordionNav} from '@theme-ui/sidenav'
import {setupTwoslashHovers} from 'gatsby-remark-shiki-twoslash/dist/dom'
import PropTypes from 'prop-types'
import {useEffect, useRef, useState} from 'react'
import {Box, Flex, jsx, NavLink, Styled} from 'theme-ui'
import Sidebar from '../sidebar.mdx'
import Head from './Head'
import Header from './Header'
import './twoslash.css'

const sidebar = {
  wrapper: AccordionNav,
  a: NavLink,
}

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  useEffect(() => {
    setupTwoslashHovers()
  }, [])

  const fullwidth = props.pageContext.frontmatter && props.pageContext.frontmatter.fullwidth // || props.location.pathname === '/'

  return (
    <Styled.root>
      <Head {...props} />
      <Flex sx={{flexDirection: 'column', minHeight: '100vh'}}>
        <Header {...{setMenuOpen, menuOpen, nav}} />
        <Box sx={{flex: '1 1 auto'}}>
          <div sx={{display: ['block', 'flex']}}>
            <div
              role="menu"
              ref={nav}
              tabIndex={0}
              onFocus={(e) => {
                setMenuOpen(true)
              }}
              onBlur={(e) => {
                setMenuOpen(false)
              }}
              onClick={(e) => {
                setMenuOpen(false)
              }}
              onKeyPress={(e) => {
                setMenuOpen(!menuOpen)
              }}
            >
              <Sidebar
                open={menuOpen}
                components={sidebar}
                pathname={props.location.pathname}
                sx={{
                  display: [null, fullwidth ? 'none' : 'block'],
                  width: 256,
                  flex: 'none',
                  px: 3,
                  pt: 3,
                  pb: 4,
                  mt: [64, 0],
                }}
              />
            </div>

            <main
              id="content"
              sx={{
                width: '100%',
                minWidth: 0,
                maxWidth: fullwidth ? 'none' : 768,
                mx: 'auto',
                px: fullwidth ? 0 : 3,
              }}
            >
              {props.children}
            </main>
          </div>
        </Box>
      </Flex>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
