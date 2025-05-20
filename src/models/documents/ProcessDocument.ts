import mongoose from "mongoose";

const ProcessSchema = new mongoose.Schema({
    processId: { type: String, required: true, unique: true }
});

export default mongoose.model('Process', ProcessSchema);