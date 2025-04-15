import { Schema } from 'mongoose';
declare const _default: import("mongoose").Model<{
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
}> & {
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
}>> & import("mongoose").FlatRecord<{
    identifier: string;
    startDate: NativeDate;
    endDate: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
