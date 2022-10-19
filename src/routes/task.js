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

//Consultar todas las actividades en la base de datos
router.get("/actividad", (req, res) => {
    taskSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar una actividad por su id en la base de datos 
router.get("/actividad/:id", (req, res) => {
    const { id } = req.params;
    taskSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de una actividad por su id en la base de datos
router.put("/actividad/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_actividad, fecha_inicial, fecha_final, hora_inicial, hora_final, descripcion, estado_avance } = req.body;
    taskSchema
        .updateOne({ _id: id }, {
             $set: { nombre_actividad, fecha_inicial, fecha_final, hora_inicial, hora_final, descripcion, estado_avance }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar una actividad por su id en la base de datos
router.delete("/actividad/:id", (req, res) => {
    const { id } = req.params;
    taskSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;