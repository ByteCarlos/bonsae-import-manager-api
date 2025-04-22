import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    code: string;
    name: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    code: string;
    name: string;
}> & {
    code: string;
    name: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    name: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    name: string;
}>> & mongoose.FlatRecord<{
    code: string;
    name: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
