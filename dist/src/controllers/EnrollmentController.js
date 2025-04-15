import Enrollment from "../models/Enrollment.js";
export default {
    async store(req, res) {
        try {
            const enrollment = new Enrollment(req.body);
            await enrollment.save();
            return res.status(201).json(enrollment);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async index(_req, res) {
        try {
            const enrollments = await Enrollment.find().populate('user class');
            return res.status(200).json(enrollments);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async show(req, res) {
        try {
            const enrollment = await Enrollment.findById(req.params.id).populate('user class');
            if (!enrollment)
                return res.status(404).json({ error: 'Enrollment not found' });
            return res.status(200).json(enrollment);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async update(req, res) {
        try {
            const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!enrollment)
                return res.status(404).json({ error: 'Enrollment not found' });
            return res.status(200).json(enrollment);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        try {
            const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
            if (!enrollment)
                return res.status(404).json({ error: 'Enrollment not found' });
            return res.status(200).json({ message: 'Enrollment deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
//# sourceMappingURL=EnrollmentController.js.map