const bcrypt = require('bcrypt');
const User = require('../models/entities/user');

exports.create = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ full_name, email, password: hashedPassword });
    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, );

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado!' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { full_name, email, password } = req.body;
    const user = await User.findByPk(req.params.id);

    if (user) {
      await user.update({ full_name, email, password });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado!' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (user) {
      await user.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado!' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
