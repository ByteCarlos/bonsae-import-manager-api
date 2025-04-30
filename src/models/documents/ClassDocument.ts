import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    shift: { type: String, enum: ['MATUTINO', 'VESPERTINO', 'NOTURNO'], required: false },
    className: { type: String, required: true },
    classCode: { type: String, required: true }    
});

export default mongoose.model('Class', ClassSchema);