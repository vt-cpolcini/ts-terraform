/** @jsx jsx */
import {jsx} from 'theme-ui'
import Layout from './components/Layout'

export const wrapPageElement = ({element, props}) => <Layout {...props} children={element} />
