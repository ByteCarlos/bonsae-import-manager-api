import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
}, {}> & {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    name?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
