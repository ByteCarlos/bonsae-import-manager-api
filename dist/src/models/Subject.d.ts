import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    code: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    code: string;
}> & {
    name: string;
    code: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    code: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    code: string;
}>> & mongoose.FlatRecord<{
    name: string;
    code: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
