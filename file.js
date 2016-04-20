'use strict'
module.exports = File

function File (contents) {
  if (typeof contents === 'object' && !Buffer.isBuffer(contents)) {
    contents = JSON.stringify(contents)
  }
  return {
    type: 'file',
    contents: contents
  }
}
