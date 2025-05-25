var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Unique, } from 'typeorm';
import { UsersEntity } from './UsersEntity.js';
import { DisciplinesEntity } from './DisciplinesEntity.js';
let DisciplineUsersEntity = class DisciplineUsersEntity {
};
__decorate([
    PrimaryGeneratedColumn({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], DisciplineUsersEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => DisciplinesEntity),
    JoinColumn({ name: 'discipline_id' }),
    __metadata("design:type", DisciplinesEntity)
], DisciplineUsersEntity.prototype, "discipline", void 0);
__decorate([
    ManyToOne(() => UsersEntity),
    JoinColumn({ name: 'users_id' }),
    __metadata("design:type", UsersEntity)
], DisciplineUsersEntity.prototype, "user", void 0);
__decorate([
    Column({ type: 'int', name: 'team_id', nullable: true }),
    __metadata("design:type", Number)
], DisciplineUsersEntity.prototype, "teamId", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'temporary', nullable: true }),
    __metadata("design:type", Boolean)
], DisciplineUsersEntity.prototype, "temporary", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'professor', nullable: false }),
    __metadata("design:type", Boolean)
], DisciplineUsersEntity.prototype, "professor", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplineUsersEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplineUsersEntity.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'timestamp', name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplineUsersEntity.prototype, "deletedAt", void 0);
DisciplineUsersEntity = __decorate([
    Entity({ name: 'discipline_users' }),
    Unique('unique_discipline', ['user', 'discipline'])
], DisciplineUsersEntity);
export { DisciplineUsersEntity };
//# sourceMappingURL=DisciplineUsersEntity.js.map