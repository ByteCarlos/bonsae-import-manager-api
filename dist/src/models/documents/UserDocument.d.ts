import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
}, {}> & {
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    profileId: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subprofile?: string | null | undefined;
    oab?: string | null | undefined;
    oabUf?: string | null | undefined;
    registrationNumber?: string | null | undefined;
    telephone?: string | null | undefined;
    periodId?: number | null | undefined;
    observations?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
