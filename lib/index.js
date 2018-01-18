const makeDir = require('make-dir')
const fs = require('fs-extra')
const path = require('path')
const async = require('async')
const zipdir = require('zip-dir')

function zip(files = [], dist, callback) {
  if (!dist)
    return callback(new Error('params dist miss.'))

  makeDir(dist)
    .then(() => {
      async.each(files, (file, cb) => {
        let distFile = path.join(dist, path.basename(file))
        fs.copy(file, distFile, cb)
      }, (err) => {
        if (err) {
          return callback(err)
        }
        const zipped = path.join(dist, path.basename(dist) + '.tar.gz')
        zipdir(dist, { saveTo: zipped }, (err) => {
          callback(err)
        })
      })
    })
    .catch((err) => {
      callback(err)
    })
}

module.exports = { zip } 