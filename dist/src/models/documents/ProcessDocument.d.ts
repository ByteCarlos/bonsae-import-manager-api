import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
}, {}> & {
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
}>, {}> & mongoose.FlatRecord<{
    processId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    schoolPeriod: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
