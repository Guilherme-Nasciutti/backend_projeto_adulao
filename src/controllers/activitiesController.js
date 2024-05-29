const Activity = require('../models/entities/activity');
const Person = require('../models/entities/person');

exports.createActivity = async (req, res) => {
  try {
    const { 
      name, initial_date, final_date, 
      start_time, duration, created, 
      person_id 
    } = req.body;
    
    const activity = await Activity.create({ 
      name, initial_date, final_date, 
      start_time, duration, created,
      person_id 
    });

    res.status(201).json(activity);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({ include: Person });
    res.status(200).json(activities);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findByPk(req.params.id, { include: Person });

    if (activity) {
      res.status(200).json(activity);
    } else {
      res.status(404).json({ error: 'Atividade não encontrada!' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateActivity = async (req, res) => {
  try {
    const { 
      name, initial_date, final_date, 
      start_time, duration, created, 
      person_id 
    } = req.body;

    const activity = await Activity.findByPk(req.params.id);

    if (activity) {
      await activity.update({ 
        name, initial_date, final_date, 
        start_time, duration, created, 
        person_id 
      });

      res.status(200).json(activity);
    } else {
      res.status(404).json({ error: 'Atividade não encontrada!' });
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByPk(req.params.id);

    if (activity) {
      await activity.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Atividade não encontrada!' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
