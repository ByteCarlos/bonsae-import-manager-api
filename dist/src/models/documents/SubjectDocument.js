import mongoose from "mongoose";
const SubjectSchema = new mongoose.Schema({
    periodId: { type: String, required: true },
    name: { type: String, required: false },
    code: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    category: { type: String, required: true, enum: ['CURSO', 'NPJ', 'PROJETOS_EXTENSIONISTAS', 'TCC'] },
    period: { type: String, enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], required: false },
    state: { type: Number, required: false },
    campus: { type: String, required: false },
    processId: { type: String, required: true },
    processRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Process',
        required: true
    },
    schoolPeriodRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School_Period',
        required: true
    }
});
SubjectSchema.index({ code: 1, schoolPeriodRef: 1, processRef: 1 }, { unique: true });
export default mongoose.model('Subject', SubjectSchema);
//# sourceMappingURL=SubjectDocument.js.map