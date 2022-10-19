const mongoose = require("mongoose"); // importando el componente mongoose
 const taskSchema = mongoose.Schema({
    nombre_actividad: {
        type: String,
        required: true
    },
    fecha_inicial: {
        type: Date,
        required: true
    },
    fecha_final: {
        type: Date,
        required: true
    },
    hora_inicial: {
        type: Time,
        required: true
    },
    hora_final: {
        type: Time,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado_avance: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('task', taskSchema);