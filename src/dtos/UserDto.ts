export enum UserProfile {
    ALUNO = 'Aluno(a)',
    PROFESSOR = 'Professor(a)',
    COORDENADOR = 'Coordenador(a)',
    SECRETARIO = 'Secretário(a)',
    ESTAGIARIO = 'Estagiário(a)',
    ADVOGADO = 'Advogado(a)'
}

export const UserProfileMap: Record<UserProfile, number> = {
    [UserProfile.ALUNO]: 1,
    [UserProfile.PROFESSOR]: 2,
    [UserProfile.COORDENADOR]: 3,
    [UserProfile.SECRETARIO]: 4,
    [UserProfile.ESTAGIARIO]: 5,
    [UserProfile.ADVOGADO]: 6
};

export interface UserDto {
    processId: string;
    data: UserDtoData[];
}

export interface UserDtoData {
    profileId: UserProfile,
    subprofile?: string,
    name: string,
    oab?: string,
    oabUf?: string,
    email: string,
    registrationNumber?: string,
    telephone?: string,
    cpf: string,
    password: string,
    periodId?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    observations?: string
}