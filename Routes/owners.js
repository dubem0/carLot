const express = require('express');

const {
    getOwners,
    getOwnerById,
    postOwner,
    deleteOwnerById,
    updateOwnerById
} = require('../Controllers/owners');

const ownerrouter = express.Router()

ownerrouter.get("/", getOwners);
ownerrouter.post("/", postOwner);
ownerrouter.get("/:id", getOwnerById);
ownerrouter.patch("/:id", updateOwnerById);
ownerrouter.delete("/:id", deleteOwnerById);

module.exports = ownerrouter