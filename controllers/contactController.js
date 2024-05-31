const Contact = require('../models/contact');

exports.getAllContacts = async (req, res) => {
  const userId = req.user.id;
  try {
    const contacts = await Contact.findAll({ where: { userId } });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactById = async (req, res) => {
  const userId = req.user.id;
  const contactId = req.params.id;
  try {
    const contact = await Contact.findOne({ where: { id: contactId, userId } });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addContact = async (req, res) => {
  const userId = req.user.id;
  const { name, phone } = req.body;
  try {
    const contact = await Contact.create({ name, phone, userId });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  const userId = req.user.id;
  const contactId = req.params.id;
  const { name, phone } = req.body;
  try {
    const contact = await Contact.findOne({ where: { id: contactId, userId } });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    contact.name = name || contact.name;
    contact.phone = phone || contact.phone;
    await contact.save();
    
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  const userId = req.user.id;
  const contactId = req.params.id;
  try {
    const contact = await Contact.findOne({ where: { id: contactId, userId } });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    await contact.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
