const Spam = require('../models/spam');

exports.markAsSpam = async (req, res) => {
  const { phone } = req.body;
  const userId = req.user.id;
  try {
    const spam = await Spam.create({ phone, userId });
    res.status(201).json(spam);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
