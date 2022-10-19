const express = require("express");
const router = express.Router(); //manejador de rutas de express
const taskSchema = require("../models/task");

 //Nueva Actividad
 router.post("/actividad", (req, res) => {
    const task = taskSchema(req.body);
    task
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todas las actividades
router.get("/actividad", (req, res) => {
    taskSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar una actividad por su id
router.get("/actividad/:id", (req, res) => {
    const { id } = req.params;
    taskSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});