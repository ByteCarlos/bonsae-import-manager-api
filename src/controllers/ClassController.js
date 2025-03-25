import Class from '../models/Class.js'

export default {
    async store(req, res) {
        try {
            const classData = new Class(req.body);
            await classData.save();
            return res.status(201).json(classData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async index(req, res) {
        try {
            const classes = await Class.find();
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async show(req, res) {
        try {
            const classData = await Class.findById(req.params.id);
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const classData = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json(classData);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async destroy(req, res) {
        try {
            const classData = await Class.findByIdAndDelete(req.params.id);
            if (!classData) return res.status(404).json({ error: 'Class not found' });
            return res.status(200).json({ message: 'Class deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};