const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employee.controller")


router.get("/", EmployeeController.getEmployees);
router.post("/", EmployeeController.createEmployee);
router.get("/:id", EmployeeController.getEmployee);
router.put("/:id", EmployeeController.editEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;
