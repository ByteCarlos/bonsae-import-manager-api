export enum UserProfile {
    ALUNO = 'Aluno(a)',
    PROFESSOR = 'Professor(a)',
    COORDENADOR = 'Coordenador(a)',
    SECRETARIO = 'Secretário(a)',
    ESTAGIARIO = 'Estagiário(a)',
    ADVOGADO = 'Advogado(a)'
}

export interface UserRawEntry {
    profile: UserProfile,
    subprofile?: string,
    name: string,
    nrOab?: string,
    ufOab?: string,
    email: string,
    enrollment?: string,
    telephone?: string,
    nrCpf: string,
    password: string,
    curricularPeriod?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    observations?: string
}

export const toUserRawEntry = (raw: any): UserRawEntry => {
    return {
        profile: raw.profile as UserProfile,
        subprofile: String(raw.subprofile),
        name: String(raw.name),
        nrOab: String(raw.nrOab),
        ufOab: String(raw.ufOab),
        email: String(raw.email),
        enrollment: String(raw.enrollment),
        telephone: String(raw.telephone),
        nrCpf: String(raw.nrCpf),
        password: String(raw.password),
        curricularPeriod: raw.curricularPeriod,
        observations: String(raw.string)
    };
}