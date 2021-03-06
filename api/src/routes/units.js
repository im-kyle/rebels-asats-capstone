const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

router
  .get('/', (request, response) => {
    db.select('*').from('units')
      .then(data => {
        response.status(200).json(data);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .get('/:id', (request, response) => {
    db.select('*').from('units').where('id', '=', request.params.id)
      .then(data => {
        response.status(200).json(data);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .post('/', (request, response) => {
    db.insert(request.body).into('units').returning('*')
      .then(data => {
        response.status(201).json(data);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .patch('/:id', (request, response) => {
    db('units').update(request.body).where('id', '=', request.params.id).returning('*')
    .then(data => {
      response.status(201).json(data);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })
  .delete('/:id', (request, response) => {
    db('units').where('id', '=', request.params.id).delete('*')
    .then(data => {
      response.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })

module.exports = router;