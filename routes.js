const express = require('express');
const router = express.Router();
const {
  NumerosAdministrador,
  Clientes,
  PoliticasPrivacidad,
  ListaNegra,
  PowerBot
} = require('./models');

// --- Rutas para NumerosAdministrador ---

router.post('/numerosAdministrador', async (req, res) => {
  try {
    const nuevoNumero = new NumerosAdministrador(req.body);
    const numeroGuardado = await nuevoNumero.save();
    res.status(201).json(numeroGuardado);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'El número de teléfono ya existe' });
    }
    res.status(500).json({ error: err.message });
  }
});

router.get('/numerosAdministrador', async (req, res) => {
  try {
    const numeros = await NumerosAdministrador.find();
    res.json(numeros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/numerosAdministrador/:id', async (req, res) => {
  try {
    const numero = await NumerosAdministrador.findById(req.params.id);
    if (!numero) {
      return res.status(404).json({ error: 'Número no encontrado' });
    }
    res.json(numero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/numerosAdministrador/:id', async (req, res) => {
  try {
    const numeroActualizado = await NumerosAdministrador.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );
    if (!numeroActualizado) {
      return res.status(404).json({ error: 'Número no encontrado' });
    }
    res.json(numeroActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/numerosAdministrador/:id', async (req, res) => {
  try {
    const numeroEliminado = await NumerosAdministrador.findByIdAndRemove(req.params.id);
    if (!numeroEliminado) {
      return res.status(404).json({ error: 'Número no encontrado' });
    }
    res.json({ message: 'Número eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// --- Rutas para Clientes ---

router.post('/clientes', async (req, res) => {
  try {
    const nuevoCliente = new Clientes(req.body);
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Clientes.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/clientes/:id', async (req, res) => {
  try {
    const clienteActualizado = await Clientes.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );
    if (!clienteActualizado) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/clientes/:id', async (req, res) => {
  try {
    const clienteEliminado = await Clientes.findByIdAndRemove(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// --- Rutas para PoliticasPrivacidad ---

router.post('/politicasPrivacidad', async (req, res) => {
  try {
    const nuevaPolitica = new PoliticasPrivacidad(req.body);
    const politicaGuardada = await nuevaPolitica.save();
    res.status(201).json(politicaGuardada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/politicasPrivacidad', async (req, res) => {
  try {
    const politicas = await PoliticasPrivacidad.find();
    res.json(politicas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/politicasPrivacidad/:id', async (req, res) => {
  try {
    const politica = await PoliticasPrivacidad.findById(req.params.id);
    if (!politica) {
      return res.status(404).json({ error: 'Política de privacidad no encontrada' });
    }
    res.json(politica);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/politicasPrivacidad/:id', async (req, res) => {
  try {
    const politicaActualizada = await PoliticasPrivacidad.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );
    if (!politicaActualizada) {
      return res.status(404).json({ error: 'Política de privacidad no encontrada' });
    }
    res.json(politicaActualizada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/politicasPrivacidad/:id', async (req, res) => {
  try {
    const politicaEliminada = await PoliticasPrivacidad.findByIdAndRemove(req.params.id);
    if (!politicaEliminada) {
      return res.status(404).json({ error: 'Política de privacidad no encontrada' });
    }
    res.json({ message: 'Política de privacidad eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// --- Rutas para ListaNegra ---

router.post('/listaNegra', async (req, res) => {
  try {
    const nuevoNumero = new ListaNegra(req.body);
    const numeroGuardado = await nuevoNumero.save();
    res.status(201).json(numeroGuardado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/listaNegra', async (req, res) => {
  try {
    const numeros = await ListaNegra.find();
    res.json(numeros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/listaNegra/:id', async (req, res) => {
  try {
    const numero = await ListaNegra.findById(req.params.id);
    if (!numero) {
      return res.status(404).json({ error: 'Número no encontrado en la lista negra' });
    }
    res.json(numero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/listaNegra/:id', async (req, res) => {
  try {
    const numeroActualizado = await ListaNegra.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );
    if (!numeroActualizado) {
      return res.status(404).json({ error: 'Número no encontrado en la lista negra' });
    }
    res.json(numeroActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/listaNegra/:id', async (req, res) => {
  try {
    const numeroEliminado = await ListaNegra.findByIdAndRemove(req.params.id);
    if (!numeroEliminado) {
      return res.status(404).json({ error: 'Número no encontrado en la lista negra' });
    }
    res.json({ message: 'Número eliminado de la lista negra correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// --- Rutas para PowerBot ---

// Asumiendo que solo hay un documento PowerBot, se usa un ID fijo para las rutas
router.put('/powerBot/:id', async (req, res) => {
  try {
    const powerBotActualizado = await PowerBot.findByIdAndUpdate(
      req.params.id,
      req.body, { new: true }
    );
    if (!powerBotActualizado) {
      return res.status(404).json({ error: 'PowerBot no encontrado' });
    }
    res.json(powerBotActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/powerBot/:id', async (req, res) => {
  try {
    const powerBot = await PowerBot.findById(req.params.id);
    if (!powerBot) {
      return res.status(404).json({ error: 'PowerBot no encontrado' });
    }
    res.json(powerBot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;