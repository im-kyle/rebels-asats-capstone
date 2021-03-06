const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

router.get('/:id', (request, response) => {
  db.select('users_mentors.user_id', "users_mentors.mentor_id", "users.first_name", "users.last_name").from('users_mentors')
    .where('user_id', '=', request.params.id)
    .leftJoin("users", "users.id", "=", "mentor_id")
    .then(data => {
      response.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
});

module.exports = router;