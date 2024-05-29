const Role = require('../models/entities/role');

exports.create = async(req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async(req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async(req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);

    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ error: 'Perfil de acesso não encontrado!' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Role.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedRole = await Role.findByPk(req.params.id);
      res.status(200).json(updatedRole);
    } else {
      res.status(404).json({ error: 'Perfil de acesso não encontrado!' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Role.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Perfil de acesso não encontrado!' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
