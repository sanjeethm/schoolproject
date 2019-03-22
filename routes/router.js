var express = require('express');
var router = express.Router();
var person = require('./../controller/person');

router.get('/person', person.all);
router.post('/person', person.create);
router.get('/person/:person_id', person.byId);
router.get('/person/search/:name', person.search);
router.put('/person/:person_id', person.update);
router.delete('/person/:person_id', person.delete);

module.exports = router;