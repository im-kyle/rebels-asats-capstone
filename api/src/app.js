const express = require('express');
const cors = require('cors');
const app = express();
const awardsRouter = require('./routes/awards');
const requirementsRouter = require('./routes/requirements');
const demographicsRouter = require('./routes/demographics');
const packagesRouter = require('./routes/packages');
const mentorsRouter = require('./routes/mentors');
const menteesRouter = require('./routes/mentees');
const usersRouter = require('./routes/users');
const afscsRouter = require('./routes/afscs');
const unitsRouter = require('./routes/units');

app.use(express.json())
app.use(cors());
app.use('/awards', awardsRouter);
app.use('/requirements', requirementsRouter);
app.use('/demographics', demographicsRouter);
app.use('/packages', packagesRouter);
app.use('/users/mentors', mentorsRouter);
app.use('/users/mentees', menteesRouter);
app.use('/users', usersRouter);
app.use('/afscs', afscsRouter);
app.use('/units', unitsRouter);

app.get('/', (req, res) => {
    res.status(200).send('The server is functioning properly.');
})

module.exports = app;

