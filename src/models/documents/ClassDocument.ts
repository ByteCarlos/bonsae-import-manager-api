import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    shift: { type: String, enum: ['MATUTINO', 'VESPERTINO', 'NOTURNO'], required: false },
    name: { type: String, required: true },
    code: { type: String, required: true },
    processId: { type: String, required: true },

    processRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Process',
        required: true
    },
    subjectRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
});

export default mongoose.model('Class', ClassSchema);