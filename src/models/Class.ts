import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    shift: { type: String, enum: ['morning', 'afternoon', 'night'], required: true },
    discipline: { type: mongoose.Schema.Types.ObjectId, ref: 'Discipline', required: true },
    name: { type: String, required: true },
    semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }
});

export default mongoose.model('Class', ClassSchema);