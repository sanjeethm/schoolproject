var db_connect = require("../common/connection");

var student = {};

//get all student
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
student.search = async function(req, res) {
  try {
    var name = req.params.name;
    var query = `select * from student where name like '%${name}%'`;
    var students = await db_connect.query(query);
    res.send(students);
  } catch (err) {
    throw new Error(err);
  }
};

//create student
student.create = async function(req, res) {
  try {
    var student = req.body;
    var query = `insert into student (
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
      name: student.name,
      address: student.address,
      phone: student.phone
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//update student
student.update = async function(req, res) {
  try {
    var student_id = req.params.student_id;
    var student = req.body;
    var query = `update student set 
            name=:name,
            address=:address,
            phone=:phone,
            updated_at=now() 
            where student_id=:student_id`;
    var result = await db_connect.query(query, {
      name: student.name,
      address: student.address,
      phone: student.phone,
      student_id: student_id
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

//delete student
student.delete = async function(req, res) {
  try {
    var student_id = req.params.student_id;
    var query = `delete from student where student_id=:student_id`;
    var result = await db_connect.query(query, {
      student_id: student_id
    });
    res.send({
      status: "success",
      result: result
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = student;
