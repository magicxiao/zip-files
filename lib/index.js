// const { makeDir } = import('make-dir')
const makeDir = require('make-dir')
const fs = require('fs-extra')
const path = require('path')
const async = require('async')
const zipdir = require('zip-dir')

function zipFiles(files = [], dist, callback) {
  if (!dist)
    return callback(new Error('params dist miss.'))

  const zipped = path.join(dist, path.basename(dist) + '.tar.gz')

  makeDir(dist)
    .then(() => {
      async.each(files, (file, cb) => {
        let distFile = path.join(dist, path.basename(file))

        fs.copy(file, distFile, (err) => {
          cb(err)
        })

      }, (err) => {
        if (err)
          return callback(err)

        zipdir(dist, { saveTo: zipped }, (err) => {
          callback(err)
        })
      })
    })
    .catch((err) => {
      callback(err)
    })
}

module.exports = { zipFiles } 