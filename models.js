const mongoose = require('mongoose');

const numerosAdministradorSchema = new mongoose.Schema({
  numTelefono: {
     type: String,
     required: true,
     unique: true 
    }
    },
    {
        timestamps: true,
    }
);

const clientesSchema = new mongoose.Schema({
        nombre: {
            type: String,
            required: true
        },
        numTelefono: {
            type: String,
            required: true 
        },
        direccion: String,
        correo: String,
    },
    {
        timestamps: true,
    }
);

const politicasPrivacidadSchema = new mongoose.Schema({
    numTelefono: {
        type: String,
        required: true
    },
    aceptadas: {
        type: Boolean,
        required: true 
    },
    },
    {
        timestamps: true,
    }
);

const listaNegraSchema = new mongoose.Schema({
        numTelefono: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const powerBotSchema = new mongoose.Schema({
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = {
  NumerosAdministrador: mongoose.model('NumerosAdministrador', numerosAdministradorSchema),
  Clientes: mongoose.model('Clientes', clientesSchema),
  PoliticasPrivacidad: mongoose.model('PoliticasPrivacidad', politicasPrivacidadSchema),
  ListaNegra: mongoose.model('ListaNegra', listaNegraSchema),
  PowerBot: mongoose.model('PowerBot', powerBotSchema),
};