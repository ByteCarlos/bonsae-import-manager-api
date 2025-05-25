import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
}, {}> & {
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
}>, {}> & mongoose.FlatRecord<{
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
