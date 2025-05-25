import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
}, {}> & {
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    name: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    profileId: string;
    email: string;
    cpf: string;
    password: string;
    periodId?: number | null | undefined;
    registrationNumber?: string | null | undefined;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    telephone?: string | null | undefined;
    observations?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
