const modelEmployee = require("../models/employee");
const EmployeeController = {};

EmployeeController.getEmployees = async (req, res) => {
  const employees = await modelEmployee.find();
  res.json(employees);
};
EmployeeController.createEmployee = async (req, res) => {
  const employee = new modelEmployee(req.body);
  await employee.save();
  res.json({
    status: "Empleado guardado",
  });
};

EmployeeController.getEmployee = async (req, res) => {
  const employee = await modelEmployee.findById(req.params.id);
  res.json(employee);
};

EmployeeController.editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    role: req.body.role,
    office: req.body.office,
    salary: req.body.salary,
  };
  await modelEmployee.findByIdAndUpdate(id, { $set: employee }, { new: true });

  res.json({
    status: "Empleado Editado correctamente",
  });
};

EmployeeController.deleteEmployee = async (req, res) => {
  await modelEmployee.findByIdAndDelete(req.params.id);
  res.json({
    status: "Empleado eliminado"
  });
};

module.exports = EmployeeController;
