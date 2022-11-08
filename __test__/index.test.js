const request = require('supertest');
const app = require('../src');
describe('GET /', () => {
    it("Response with Hello World!", (done) => {
      request(app).get('/').expect('Hello', done);
  })  
})