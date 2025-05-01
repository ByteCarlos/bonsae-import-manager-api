import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    shift: { type: String, enum: ['MATUTINO', 'VESPERTINO', 'NOTURNO'], required: false },
    name: { type: String, required: true },
    code: { type: String, required: true }    
});

export default mongoose.model('Class', ClassSchema);