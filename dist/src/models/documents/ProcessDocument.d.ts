import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    processId: string;
    currentStatus?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    processId: string;
    currentStatus?: string | null | undefined;
}, {}> & {
    processId: string;
    currentStatus?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    processId: string;
    currentStatus?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    processId: string;
    currentStatus?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    processId: string;
    currentStatus?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
