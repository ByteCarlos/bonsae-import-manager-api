import mongoose from "mongoose";

const FolderSchema = new mongoose.Schema({
    internalNumber: { type: Number, required: false },
    assistedName: { type: String, required: false },
    screening: { type: String, required: false },
    natureOfTheAction: { type: String, required: false },
    demand: { type: String, required: false },
    observations: { type: String, required: false },
    district: { type: String, required: false },
    justice: { type: String, required: false },
    court: { type: String, required: false },
    cnj: { type: String, required: false },
    processNumber: { type: String, required: false },
    value: { type: Number, required: false },
    subject: { type: String, required: false },
    status: { type: String, required: true },
    processStatus: { type: String, required: false },
    processSituation: { type: String, required: false }
});

export default mongoose.model('Class', FolderSchema);