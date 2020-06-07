const fs = require('fs')
const path = require('path')
const {createFileNodeFromBuffer} = require('gatsby-source-filesystem')

exports.sourceNodes = async ({actions, createNodeId, createContentDigest, getCache}) => {
  const {createNode} = actions

  const value = fs.readFileSync(path.join(__dirname, '..', 'CHANGELOG.md'))

  createNode({
    id: 'changelog',
    parent: null,
    children: [],
    internal: {
      mediaType: 'text/markdown',
      type: 'CustomChangelog',
      content: value.toString('utf8'),
      contentDigest: createContentDigest(value.toString('utf8')),
    },
  })

  return createFileNodeFromBuffer({
    buffer: value,
    getCache,
    createNode,
    createNodeId,
    ext: '.md',
    name: 'changelog',
  })
}
