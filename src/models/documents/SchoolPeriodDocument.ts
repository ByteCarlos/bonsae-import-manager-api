import mongoose, { Schema, model } from 'mongoose';
import { Period } from '../../dtos/SchoolPeriodDto';

const SchoolPeriodSchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, enum: Period, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    processId: { type: String, required: true },

    processRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Process',
        required: true
    },
});

export default model('School_Period', SchoolPeriodSchema);