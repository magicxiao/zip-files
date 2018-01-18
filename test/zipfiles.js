const zipfiles = require('../lib/index')
const path = require('path')
const fs = require('fs-extra')
const assert = require('assert')

const dist = path.join(__dirname, 'dist')
const target = path.join(__dirname, 'dist', 'dist.tar.gz')

const files = [
  path.join(__dirname, 'source', 'file1.log'),
  path.join(__dirname, 'source', 'file2.log'),
]

describe('zip', function() {
  describe('#files()', function() {
    before(function(done) {
      fs.remove(dist, (err) => { done() })
    })

    it('should zip files', function() {      
      zipfiles.zip(files, dist, (err) => {
        fs.ensureFile(target)
        .then(() => {
        })
        .catch(err => {
          assert.ifError(err)
        })
      })
    });
  });
});


