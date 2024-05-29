const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/entities/user');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

    res.json({ token });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.logout = async (req, res) => {
  res.json({ message: 'Logout bem-sucedido' });
}