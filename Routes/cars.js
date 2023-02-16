const express = require('express');

const {
    getCars,
    getCarById,
    postCar,
    deleteCarById,
    updateCarById
} = require('../Controllers/cars');

const carrouter = express.Router()

carrouter.get("/", getCars);
carrouter.post("/", postCar);
carrouter.get("/:id", getCarById);
carrouter.patch("/:id", updateCarById);
carrouter.delete("/:id", deleteCarById);

module.exports = carrouter