'use strict';
const express = require('express');
const { getStores, addStore } = require('../controllers/stores');
const serverless = require('serverless-http');

const router = express.Router();

router
  .route('/')
  .get(getStores)
  .post(addStore);


module.exports.handler = serverless(router);