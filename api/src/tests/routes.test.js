const request = require('supertest');
const testApp = require('../app');

// Testing Data:
const exampleUser = {
  fb_uid: 'UNREAL_ID',
  first_name: 'Marty',
  last_name: 'Test',
  middle_initial: 'M',
  rank_grade: 'SPC4',
  afsc_id: 3,
  duty_title: 'Defensive Cyber Operator',
  majcom_foa_dru: 'DEL 6',
  phone_dsn: '555-7196',
  phone_comm: '(555) 555-7196',
  unit_id: 1,
  demographic_id: 1,
  is_admin: false
};
let exampleUserResponse = null;

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

describe("Users Route:", () => {
  test("GETs all users.", (done) => {
    request(testApp)
      .get('/users')
      .expect((response) => {
        expect(response.body.length).not.toBe(0);
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
  test("GETs an individual user.", (done) => {
    request(testApp)
      .get('/users/1')
      .expect((response) => {
        expect(response.body.last_name).toBe('Horne');
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
  test("POSTs a user.", (done) => {
    request(testApp)
      .post('/users').send(exampleUser)
      .expect((response) => {
        expect(response.body).not.toBe(undefined);
      })
      .end((err, res) => {
        if (err) throw err;
        exampleUserResponse = res.body;
        done();
      })
  });
  test("PATCHes a user.", (done) => {
    request(testApp)
      .patch(`/users/${exampleUserResponse.id}`)
      .send({first_name: 'Martin'})
      .expect((response) => {
        expect(response.body[0].first_name).toBe('Martin');
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
  test("DELETEs a user.", (done) => {
    request(testApp)
      .delete(`/users/${exampleUserResponse.id}`)
      .expect((response) => {
        expect(response.body.first_name).toBe('Martin');
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
})