const Person = require('../models/entities/person');
const Role = require('../models/entities/role');

exports.createPerson = async (req, res) => {
  try {
    const { 
      first_name, last_name, birthday, 
      civil_status, phone, education, 
      role_id 
    } = req.body;

    const person = await Person.create({ 
      first_name, last_name, birthday, 
      civil_status, phone, education, 
      role_id 
    });

    res.status(201).json(person);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll({ include: Role });
    res.status(200).json(persons);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id, { include: Role });

    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada!' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerson = async (req, res) => {
    try {
      const { 
        first_name, last_name, birthday, 
        civil_status, phone, education, 
        role_id 
      } = req.body;

      const person = await Person.findByPk(req.params.id);

      if (person) {
        await person.update({ 
          first_name, last_name, birthday, 
          civil_status, phone, education, 
          role_id 
        });
        
        res.status(200).json(person);
      } else {
        res.status(404).json({ error: 'Pessoa não encontrada!' });
      }

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.deletePerson = async (req, res) => {
    try {
      const person = await Person.findByPk(req.params.id);

      if (person) {
        await person.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Pessoa não encontrada!' });
      }

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
