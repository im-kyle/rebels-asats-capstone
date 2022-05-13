const express = require('express');
const router = express.Router();
const db = require('../dbConnection');





router
  // .get('/', (request, response) => {
  //   db.select('*').from('users')
  //     .then(data => {
  //       response.status(200).json(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       throw err;
  //     });
  // })
  .get('/',(req, res) => {
    const fb_uid = req.query.fb_uid
    if (fb_uid) {
      db
      .select('*')
      .from('users')
      .where('fb_uid', '=', fb_uid)
      .leftJoin("afscs", "afscs.id","=","afsc_id")
      .then((data) => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not GET users data.'
        })
      );
    } else {
      db
      .select('*')
      .from('users')
      .then((data) => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not GET users data.'
        })
      );
    }
  })

  .get('/:id', (request, response) => {
    db.select('*').from('users').where('id', '=', request.params.id)
      .then(data => {
        response.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  })
  .post('/', (request, response) => {
    db.insert(request.body).into('users').returning('*')
      .then(data => {
        response.status(201).json(data);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  })
  .patch('/:id', (request, response) => {
    db('users').update(request.body).where('id', '=', request.params.id).returning('*')
    .then(data => {
      response.status(201).json(data);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  })
  .delete('/:id', (request, response) => {
    db('users').where('id', '=', request.params.id).delete('*')
    .then(data => {
      response.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  })

module.exports = router;