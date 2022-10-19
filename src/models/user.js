const mongoose = require("mongoose"); // importando el componente mogoose
 const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    correo_usuario: {
        type: String,
        required: true
    },
    telefono_usuario: {
        type: String,
        required: true
    },
    grado_usuario: {
        type: String,
        required: true
    },
    correo_contacto: {
        type: String,
        required: true
    },
    telefono_contacto: {
        type: String,
        required: true
    },
    grado_contacto: {
        type: String,
        required: true
    },
    observaciones: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);

