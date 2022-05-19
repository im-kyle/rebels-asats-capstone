const express = require('express');
const router = express.Router();
const db = require('../dbConnection');

router
  .get('/',(req, res) => {
    const fb_uid = req.query.fb_uid
    if (fb_uid) {
      db
      .select('*')
      .from('afscs')
      .where('fb_uid', '=', fb_uid)
      .rightJoin("users", "afscs.id","=","users.afsc_id")
      .then((data) => {
        db.select("*")
        .from('units')
        .where("id", "=", data[0].unit_id)
        .then((units_data)=>{
          let parsedData = {...units_data[0]}
          parsedData.unit_name = parsedData.name
          delete parsedData.name
          delete parsedData.id
          let body = Object.assign(data[0], parsedData)
          body.afsc_title = body.title;
          body.afsc_code = body.code;
          delete body.title
          delete body.code
          res.status(200).json([body])
        })
      })
      .catch(err => {
        console.error(err);
        throw err;
      })
    } else {
      db
      .select('*')
      .from('users')
      .then((data) => res.status(200).json(data))
      .catch(err => {
        console.error(err);
        throw err;
      })
    }
  })
  .get('/:id', (request, response) => {
    db.select('*').from('users').where('id', '=', request.params.id)
      .then(data => {
        response.status(200).json(data[0]);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .post('/', (request, response) => {
    db.insert(request.body).into('users').returning('*')
      .then(data => {
        response.status(201).json(data[0]);
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  })
  .patch('/:id', (request, response) => {
    db('users').update(request.body).where('id', '=', request.params.id).returning('*')
    .then(data => {
      response.status(201).json(data);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })
  .delete('/:id', (request, response) => {
    db('users').where('id', '=', request.params.id).delete('*')
    .then(data => {
      response.status(200).json(data[0]);
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
  })

module.exports = router;