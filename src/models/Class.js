import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    name: { type: String, required: true },
    semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }
});

export default mongoose.model('Class', ClassSchema);