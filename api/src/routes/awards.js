const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

router
  .get('/', (request, response) => {
    db.from('requirements')
    .rightJoin("awards", "requirements.id", "=", "awards.requirements_id")
    .select('*')
      .then(data => {
        response.status(200).json(data);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .post('/', (request, response) => {
    db.insert(request.body).into('awards').returning('*')
      .then(data => {
        response.status(201).json(data[0]);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .patch('/:id', (request, response) => {
    db('awards').update(request.body).where('id', '=', request.params.id).returning('*')
    .then(data => {
      response.status(201).json(data[0]);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })
  .delete('/:id', (request, response) => {
    db('awards').where('id', '=', request.params.id).delete('*')
    .then(data => {
      response.status(200).json(data[0]);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })

module.exports = router;