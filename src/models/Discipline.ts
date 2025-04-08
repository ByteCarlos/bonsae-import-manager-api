import mongoose from "mongoose";

const DisciplineSchema = new mongoose.Schema({
    semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    category: { type: String, required: true, enum: ['COURSE', 'NPJ', 'EXTENSION_PROJECTS', 'TCC'] },
    curriculumPeriod: { type: Number, required: true, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    state: { type: String, required: true },
    campus: { type: String, required: true }
});

export default mongoose.model('Discipline', DisciplineSchema);