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
import { AcademicClassesEntity } from './AcademicClassesEntity.js';
let DisciplinesEntity = class DisciplinesEntity {
};
__decorate([
    PrimaryGeneratedColumn({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], DisciplinesEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => AcademicClassesEntity),
    JoinColumn({ name: 'academic_classes_id' }),
    __metadata("design:type", AcademicClassesEntity)
], DisciplinesEntity.prototype, "academicClass", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], DisciplinesEntity.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', length: 50, name: 'code', nullable: false }),
    __metadata("design:type", String)
], DisciplinesEntity.prototype, "code", void 0);
__decorate([
    Column({ type: 'varchar', length: 12, name: 'shift', nullable: true }),
    __metadata("design:type", String)
], DisciplinesEntity.prototype, "shift", void 0);
__decorate([
    Column({ type: 'boolean', default: true, name: 'active', nullable: true }),
    __metadata("design:type", Boolean)
], DisciplinesEntity.prototype, "active", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'is_exceptional', nullable: true }),
    __metadata("design:type", Boolean)
], DisciplinesEntity.prototype, "isExceptional", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'integration', nullable: true }),
    __metadata("design:type", String)
], DisciplinesEntity.prototype, "integration", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplinesEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplinesEntity.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'timestamp', name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], DisciplinesEntity.prototype, "deletedAt", void 0);
DisciplinesEntity = __decorate([
    Entity({ name: 'disciplines' }),
    Unique('unique_discipline', ['code'])
], DisciplinesEntity);
export { DisciplinesEntity };
//# sourceMappingURL=DisciplinesEntity.js.map