const express = require('express');

const {
    getEmployees,
    getEmployeeById,
    postEmployee,
    deleteEmployeeById,
    updateEmployeeById
} = require('../Controllers/employees');

const employeerouter = express.Router()

employeerouter.get("/", getEmployees);
employeerouter.post("/", postEmployee);
employeerouter.get("/:id", getEmployeeById);
employeerouter.patch("/:id", updateEmployeeById);
employeerouter.delete("/:id", deleteEmployeeById);

module.exports = employeerouter