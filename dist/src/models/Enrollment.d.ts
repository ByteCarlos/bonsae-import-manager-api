import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
}> & {
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId;
    class: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
