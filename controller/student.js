var db_connect = require("../common/connection");

var student = {};

//get all person
student.all = async function(req, res) {
  try {
    var query = `select * from student`;
    var students = await db_connect.query(query);
    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//get by id student
student.byId = async function(req, res) {
  try {
    var student_id = req.params.student_id;
    var query = `select * from student where student_id=:student_id`;
    var students = await db_connect.query(query, {
      student_id: student_id
    });
    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//search name
person.search = async function(req, res) {
  try {
    var name = req.params.name;
    var query = `select * from person where name like '%${name}%'`;
    var persons = await db_connect.query(query);
    res.send(persons);
  } catch (err) {
    throw new Error(err);
  }
};

//create person
person.create = async function(req, res) {
  try {
    var person = req.body;
    var query = `insert into person (
            name,
            address,
            phone,
            created_at,
            updated_at
        ) values (
            :name,
            :address,
            :phone,
            now(),
            now()
        )`;
    var result = await db_connect.query(query, {
      name: person.name,
      address: person.address,
      phone: person.phone
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//update person
person.update = async function(req, res) {
  try {
    var person_id = req.params.person_id;
    var person = req.body;
    var query = `update person set 
            name=:name,
            address=:address,
            phone=:phone,
            updated_at=now() 
            where person_id=:person_id`;
    var result = await db_connect.query(query, {
      name: person.name,
      address: person.address,
      phone: person.phone,
      person_id: person_id
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//delete person
person.delete = async function(req, res) {
  try {
    var person_id = req.params.person_id;
    var query = `delete from person where person_id=:person_id`;
    var result = await db_connect.query(query, {
      person_id: person_id
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = person;
