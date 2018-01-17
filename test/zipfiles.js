const zipfiles = require('../lib/index')
const path = require('path')
const fs = require('fs-extra')

const dist = path.join(__dirname, 'dist')

const files = [
  path.join(__dirname, 'file1.log'),
  path.join(__dirname, 'file2.log'),
]

describe('zip', function() {
  describe('#files()', function() {
    before(function(done) {
      fs.remove(dist, (err) => { done() })
    })

    it('should zip files', function() {      
      zipfiles.zipFiles(files, dist, (err) => {
        
      })
    });
  });
});


