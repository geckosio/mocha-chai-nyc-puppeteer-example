const chai = require('chai')
const should = chai.should()
const expect = chai.expect

const { runner } = require('mocha-headless-chrome')

const writeFile = require('../node_modules/mocha-headless-chrome/lib/write-file')

const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const lib = require('../packages/server/lib.js')
const { math, Hello, makeBlo, helloFromServer } = lib

app.use(cors())

// when client and server test are finished
// we call process.exit()
let shouldExit = false
const exit = () => {
  if (shouldExit) process.exit()
  else shouldExit = true
}

// opens the headless browser and test the client code
const testClient = async () => {
  const result = await runner({
    file: 'test/index.test.html',
    args: ['no-sandbox']
  })

  // add the coverage from the browser to .nyc_output
  writeFile('.nyc_output/coverage.json', JSON.stringify(result.coverage))
  exit()
}

// start testings the server code
describe('#server.test.js', () => {
  describe('#setup express', () => {
    it('should successfully setup express.js', done => {
      app.get('/', (req, res) => {
        return res.json({ test: 'Hello World!' })
      })

      app.listen(port, () => {
        done()
        testClient()
      })
    })
  })

  describe('#test function', () => {
    it('should make blo', () => {
      expect(makeBlo()).to.be.equal('I make blo!')
    })

    it('server should say goodbye', () => {
      expect(helloFromServer(false)).to.be.equal('Server says goodbye.')
    })

    it('should be a string', () => {
      'Yannick'.should.be.a('string')
    })

    it('should divide 88 by 11', () => {
      expect(math.divide(88, 11)).to.be.equal(8)
    })

    it('should be done after 5 seconds', done => {
      setTimeout(() => {
        done()
      }, 5000)
    })

    it('sum should be 5', () => {
      expect(math.sum(3, 2)).to.be.equal(5)
    })
  })

  after(() => {
    exit()
  })
})
