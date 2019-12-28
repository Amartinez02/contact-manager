"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService_1 = require("../services/ContactService");
var ContactCtrl = /** @class */ (function () {
    function ContactCtrl() {
    }
    ContactCtrl.prototype.getContacts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Consultando listado de Contactos");
                        return [4 /*yield*/, ContactService_1.default.getContacts(req)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("Error consultando listado de Contactos: " + err_1);
                        res.status(err_1.code).send({ success: err_1.success, data: err_1.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactCtrl.prototype.createContact = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Creando contacto");
                        return [4 /*yield*/, ContactService_1.default.createContact(req.body)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log("Error creando contacto: " + err_2);
                        res.status(err_2.code).send({ success: err_2.success, data: err_2.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactCtrl.prototype.updateContact = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Actualizando contacto");
                        return [4 /*yield*/, ContactService_1.default.updateContact(req.body)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log("Error actualizando contacto: " + err_3);
                        res.status(err_3.code).send({ success: err_3.success, data: err_3.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactCtrl.prototype.deleteContact = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Eliminando contacto");
                        return [4 /*yield*/, ContactService_1.default.deleteContact(req.params.contact_id)];
                    case 1:
                        result = _a.sent();
                        res.status(result.code).send({ success: result.success, data: result.data });
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log("Error eliminando contacto: " + err_4);
                        res.status(err_4.code).send({ success: err_4.success, data: err_4.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactCtrl.prototype.getContactsPDF = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("Consultando listado de Contactos");
                        return [4 /*yield*/, ContactService_1.default.getPDF()];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.log("Error consultando listado de Contactos: " + err_5);
                        res.status(err_5.code).send({ success: err_5.success, data: err_5.data });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ContactCtrl;
}());
exports.ContactCtrl = ContactCtrl;
//# sourceMappingURL=ContactCtrl.js.map