const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/user");
const taskSchema = require("../models/task");

 //Nuevo Usuario
router.post("/usuario", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

 
//Consultar todos los usuarios en la base de datos
router.get("/usuario", (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Consultar un usuario por su id en la base de datos
router.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un usuario por su id en la base de datos
router.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, curso, rol, correo_usuario, telefono_usuario, grado_usuario, correo_contacto, telefono_contacto, grado_contacto, observaciones, contraseña } = req.body;
    userSchema
        .updateOne({ _id: id }, {
             $set: { nombre, apellido, curso, rol, correo_usuario, telefono_usuario, grado_usuario, correo_contacto, telefono_contacto, grado_contacto, observaciones, contraseña }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Modificar los datos para agregar una actividad
router.put("/usuarioa/:id", async(req, res) => {
    const { id } = req.params;
    const task = taskSchema(req.body);
    var idtask = null;
    const taskConsulta = await taskSchema.findOne({ codigo: req.body.codigo});
    if(!taskConsulta){
        await task.save().then((dataTask) => {
            idtask = dataTask._id;
        });

     } else {
        idtask =taskConsulta._id;

     }
    userSchema
        .updateOne({ _id: id }, {
            $addToSet: {tarea: idtask}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Eliminar un usuario por su id en la base de datos
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

