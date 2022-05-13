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
const exampleUserID = 1;
const exampleMentorData = {
  user_id: 4,
  mentor_id: 1
};
const exampleMentorDataUpdate = {
  user_id: 4,
  mentor_id: 2
};
const exampleAward = {
  title: 'Annual Influential Women in STEM',
  description: 'An award presented annually to recognize women in STEM who are making waves with their innovations and accomplishments, both in their workplaces and in their communities.',
  requirements_id: 9
};
let exampleAwardResponse = null;
const exampleAwardTitle = 'Annual Influential Leading Women in STEM';
const exampleRequirement = {

};

/* Template:

  test("", (done) => {
    request(testApp)
    // Method
    .expect(response => {
      // Test
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
*/

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
});

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
});

describe("User Mentorship Routes:", () => {
  test("Retrieves mentees for a given user.", (done) => {
    request(testApp)
      .get(`/users/mentees/${exampleUserID}`)
      .expect(response => {
        expect(response.body[0].user_id).toBe(1);
        expect(response.body[0].mentor_id).toBe(5);
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
  test("Retrieves mentors for a given user.", (done) => {
    request(testApp)
    .get(`/users/mentors/${exampleUserID}`)
    .expect(response => {
      expect(response.body[0].user_id).toBe(2);
      expect(response.body[0].mentor_id).toBe(1);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Adds a new mentor/mentee relationship.", (done) => {
    request(testApp)
    .post('/users/mentors')
    .send(exampleMentorData)
    .expect(response => {
      expect(response.body.user_id).toBe(4);
      expect(response.body.mentor_id).toBe(1);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Patches a mentor/mentee relationship.", (done) => {
    request(testApp)
    .patch(`/users/mentors/?user=${exampleMentorData.user_id}&mentor=${exampleMentorData.mentor_id}`)
    .send(exampleMentorDataUpdate)
    .expect(response => {
      expect(response.body.user_id).toBe(4);
      expect(response.body.mentor_id).toBe(2);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Removes a mentor/mentee relationship.", (done) => {
    request(testApp)
    .delete(`/users/mentors/?user=${exampleMentorData.user_id}&mentor=${exampleMentorDataUpdate.mentor_id}`)
    .expect(response => {
      expect(response.body.user_id).toBe(4);
      expect(response.body.mentor_id).toBe(2);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
});

describe("Awards Route", () => {
  test("Retrieves all awards and requirements.", (done) => {
    request(testApp)
      .get('/awards')
      .expect(response => {
        expect(response.body[0].id).toBe(1);
        expect(response.body[0].requirements_id).toBe(1);
//        expect(response.body.length).toBe(22);
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      })
  });
  test("Adds a new award.", (done) => {
    request(testApp)
    .post('/awards')
    .send(exampleAward)
    .expect(response => {
      exampleAwardResponse = response.body;
      expect(response.body.title).toBe('Annual Influential Women in STEM')
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Alters an existing award.", (done) => {
    request(testApp)
    .patch(`/awards/${exampleAwardResponse.id}`)
    .send({title: exampleAwardTitle})
    .expect(response => {
      expect(response.body.title).toBe(exampleAwardTitle);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Removes an award.", (done) => {
    request(testApp)
    .delete(`/awards/${exampleAwardResponse.id}`)
    .expect(response => {
      expect(response.body.id).toBe(exampleAwardResponse.id)
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
});

describe("Fetching Requirements/Demographics", () => {
  test("Retrieves all requirements.", (done) => {
    request(testApp)
    .get('/requirements')
    .expect(response => {
      expect(response.body[0].id).toBe(1);
      expect(response.body[14].id).toBe(15);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
  test("Retrieves all demographics.", (done) => {
    request(testApp)
    .get('/demographics')
    .expect(response => {
      expect(response.body[3].id).toBe(4);
      expect(response.body[3].is_female).toBe(true);
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    })
  });
});