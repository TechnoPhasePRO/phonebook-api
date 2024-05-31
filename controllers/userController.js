const { Op } = require('sequelize');
const { User, Contact } = require('../models');

exports.getUserProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findByPk(userId, { include: ['contacts'] });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchByName = async (req, res) => {
  const { name } = req.params;
  try {
    const users = await User.findAll({
      where: { name: { [Op.like]: `${name}%` } },
      include: ['contacts'],
    });
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchByPhone = async (req, res) => {
  const { phone } = req.params;
  try {
    const contacts = await Contact.findAll({ where: { phone } });
    res.json(contacts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
