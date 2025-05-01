import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
    periodId: { type: String, required: true },
    subjectName: { type: String, required: false },
    subjectCode: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    category: { type: String, required: true, enum: ['CURSO', 'NPJ', 'PROJETOS_EXTENSIONISTAS', 'TCC'] },
    curricularPeriod: { type: String, enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], required: false },
    state: { type: String, required: false },
    campus: { type: String, required: false }
});

export default mongoose.model('Subject', SubjectSchema);