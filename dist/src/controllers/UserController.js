import User from "../models/User.js";
export default {
    async store(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async index(_req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async show(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async destroy(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user)
                return res.status(404).json({ error: 'User not found' });
            return res.status(200).json({ message: 'User deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
//# sourceMappingURL=UserController.js.map