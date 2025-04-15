import mongoose from 'mongoose';

const PeriodSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  schoolTerm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SchoolTerm',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Period', PeriodSchema);
