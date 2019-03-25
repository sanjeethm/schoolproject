var express = require("express");
var router = express.Router();
var person = require("../controller/student");

router.get("/student", student.all);
router.post("/student", student.create);
router.get("/student/:student_id", student.byId);
router.get("/student/search/:name", student.search);
router.put("/student/:student_id", student.update);
router.delete("/student/:student_id", student.delete);

module.exports = router;
