#!/usr/bin/env node
const express = require('express');
const {config} = require('./config');
const {logger} = require('./log');

const cliwa = require('../cliwa')(config, logger);

const app = express();
app.use('/cliwa', cliwa);
app.use(express.static('public'));
app.get('/', (req, res) => res.send('CLI WEB ACCESS'));

app.listen(config.listenPort, () => console.log('CLIWA listening on port %d!', config.listenPort));
