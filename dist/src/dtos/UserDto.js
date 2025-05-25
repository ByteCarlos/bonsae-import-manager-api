export var UserProfile;
(function (UserProfile) {
    UserProfile["ALUNO"] = "Aluno(a)";
    UserProfile["PROFESSOR"] = "Professor(a)";
    UserProfile["COORDENADOR"] = "Coordenador(a)";
    UserProfile["SECRETARIO"] = "Secret\u00E1rio(a)";
    UserProfile["ESTAGIARIO"] = "Estagi\u00E1rio(a)";
    UserProfile["ADVOGADO"] = "Advogado(a)";
})(UserProfile || (UserProfile = {}));
export const UserProfileMap = {
    [UserProfile.ALUNO]: 1,
    [UserProfile.PROFESSOR]: 2,
    [UserProfile.COORDENADOR]: 3,
    [UserProfile.SECRETARIO]: 4,
    [UserProfile.ESTAGIARIO]: 5,
    [UserProfile.ADVOGADO]: 6
};
//# sourceMappingURL=UserDto.js.map