const mongoose = require("mongoose"); // importando el componente mongoose
 const taskSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    titulo: {
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
        type: String,
        required: true
    },
    hora_final: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado_avance: {
        type: String,
        required: true
    },prioridad: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('task', taskSchema);