"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Atms = /** @class */ (function (_super) {
    __extends(Atms, _super);
    function Atms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Atms.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "atm_code", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "zone", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "province", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "bankcode", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", nullable: true }),
        __metadata("design:type", String)
    ], Atms.prototype, "bankname", void 0);
    __decorate([
        typeorm_1.Column({ type: "boolean", nullable: true, default: false }),
        __metadata("design:type", Boolean)
    ], Atms.prototype, "isagency", void 0);
    Atms = __decorate([
        typeorm_1.Entity()
    ], Atms);
    return Atms;
}(typeorm_1.BaseEntity));
exports.Atms = Atms;
//# sourceMappingURL=atms.js.map