const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

router
  .get('/:id', (request, response) => {
    db.select('users_mentors.user_id', "users_mentors.mentor_id", "users.first_name", "users.last_name").from('users_mentors')
      .where('mentor_id', '=', request.params.id)
      .leftJoin("users", "users.id", "=", "user_id")

      .then(data => {
        response.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  })
  .post('/', (request, response) => {
    db.insert(request.body).into('users_mentors').returning('*')
      .then(data => {
        response.status(201).json(data[0]);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  })
  .patch('/', (request, response) => {
    db('users_mentors').update(request.body).where('user_id', '=', request.query.user).andWhere('mentor_id', '=', request.query.mentor).returning('*')
    .then(data => {
      response.status(201).json(data[0]);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  })
  .delete('/', (request, response) => {
    db('users_mentors').where('user_id', '=', request.query.user).andWhere('mentor_id', '=', request.query.mentor).delete('*')
    .then(data => {
      response.status(200).json(data[0]);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  })

module.exports = router;