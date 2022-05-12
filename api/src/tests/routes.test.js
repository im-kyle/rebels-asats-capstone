const request = require('supertest');
const testApp = require('../app');

test('GETs Root Route', (done) => {
  request(testApp)
    .get('/')
    .expect((response) => {
      expect(response.text).toBe("The server is functioning properly.");
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
})