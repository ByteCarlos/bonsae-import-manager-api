var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
let UsersEntity = class UsersEntity {
};
__decorate([
    PrimaryGeneratedColumn({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "id", void 0);
__decorate([
    Column({ type: 'int', name: 'id_old_bonsae', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "idOldBonsae", void 0);
__decorate([
    Column({ type: 'int', name: 'id_audora', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "idAudora", void 0);
__decorate([
    Column({ type: 'bigint', name: 'profile_id', nullable: false }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "profileId", void 0);
__decorate([
    Column({ type: 'boolean', default: true, name: 'active', nullable: true }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "active", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', length: 50, name: 'registration_number', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "registrationNumber", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'email', nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'receive_emails', nullable: true }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "receiveEmails", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'gmail', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "gmail", void 0);
__decorate([
    Column({ type: 'text', name: 'gcalendar_Credentials', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "gcalendarCredentials", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'approve_api', nullable: true }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "aprroveApi", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'approve_msg', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "approveMsg", void 0);
__decorate([
    Column({ type: 'varchar', length: 20, name: 'telephone', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "telephone", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'password', nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    Column({ type: 'varchar', length: 14, name: 'cpf', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "cpf", void 0);
__decorate([
    Column({ type: 'int', name: 'period_id', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "periodId", void 0);
__decorate([
    Column({ type: 'varchar', length: 20, name: 'oab', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "oab", void 0);
__decorate([
    Column({ type: 'char', length: 2, name: 'oab_uf', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "oabUf", void 0);
__decorate([
    Column({ type: 'time', name: 'workload_real', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "workloadReal", void 0);
__decorate([
    Column({ type: 'time', name: 'workload_simulated', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "worloadSimulated", void 0);
__decorate([
    Column({ type: 'text', name: 'observations', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "observations", void 0);
__decorate([
    Column({ type: 'varchar', length: '255', name: 'profile_pic', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "profilePic", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'course', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "course", void 0);
__decorate([
    Column({ type: 'int', name: 'course_id', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "courseId", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'is_admin', nullable: true }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "isAdmin", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'remember_token', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "rememberToken", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'access_token', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "accessToken", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'browser_agent', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "browserAgent", void 0);
__decorate([
    Column({ type: 'date', name: 'date_accept', nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "dateAccept", void 0);
__decorate([
    Column({ type: 'datetime', name: 'last_login', nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "lastLogin", void 0);
__decorate([
    Column({ type: 'datetime', name: 'last_logout', nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "lastLogout", void 0);
__decorate([
    Column({ type: 'time', name: 'logged_time', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "loggedTime", void 0);
__decorate([
    Column({ type: 'time', name: 'all_time_logged', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "allTimeLogged", void 0);
__decorate([
    Column({ type: 'time', name: 'average_logged_time', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "averageLoggedTime", void 0);
__decorate([
    Column({ type: 'int', default: 0, name: 'times_active', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "timesActive", void 0);
__decorate([
    Column({ type: 'varchar', length: 45, name: 'ip', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "ip", void 0);
__decorate([
    Column({ type: 'tinyint', default: 0, name: 'permission', nullable: true }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "permission", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'integration', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "integration", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', name: 'created_at' }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamp', name: 'updated_at' }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'timestamp', name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "deletedAt", void 0);
UsersEntity = __decorate([
    Entity({ name: 'users' }),
    Unique('unique_user', ['profileId', 'name', 'registrationNumber', 'email'])
], UsersEntity);
export { UsersEntity };
//# sourceMappingURL=UsersEntity.js.map