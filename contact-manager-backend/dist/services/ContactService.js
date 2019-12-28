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
var ContactRepository_1 = require("../repositories/ContactRepository");
var Contact_1 = require("../entities/Contact");
var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.getContacts = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        filter = void 0;
                        console.log(req.params.locality_id);
                        if (req.params.locality_id) {
                            filter = { locality: req.params.locality_id };
                        }
                        else {
                            filter = { active: true };
                        }
                        return [4 /*yield*/, ContactRepository_1.default.findContacts(filter)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, { success: true, code: 200, data: result }];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, { success: false, code: 500, data: err_1.message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactService.prototype.createContact = function (contactData) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        contact = new Contact_1.Contact();
                        contact.name = contactData.name;
                        contact.phone = contactData.phone;
                        contact.email = contactData.email;
                        contact.address = contactData.address;
                        contact.dealer = contactData.dealer;
                        contact.locality = contactData.locality;
                        contact.active = true;
                        return [4 /*yield*/, ContactRepository_1.default.createContact(contact)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { success: true, code: 200, data: { message: "Usuario creado correctamente" } }];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, { success: false, code: 500, data: err_2.message }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactService.prototype.updateContact = function (contactData) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, ContactRepository_1.default.findContactById(contactData.id)];
                    case 1:
                        contact = _a.sent();
                        contact.name = contactData.name;
                        contact.phone = contactData.phone;
                        contact.email = contactData.email;
                        contact.address = contactData.address;
                        contact.dealer = contactData.dealer;
                        contact.locality = contactData.locality;
                        return [4 /*yield*/, ContactRepository_1.default.updateContact(contact, contactData.id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { success: true, code: 200, data: { message: "Contacto actualizando correctamente" } }];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, { success: false, code: 500, data: { message: err_3.message } }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ContactService.prototype.deleteContact = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, ContactRepository_1.default.findContactById(id)];
                    case 1:
                        contact = _a.sent();
                        contact.active = false;
                        return [4 /*yield*/, ContactRepository_1.default.updateContact(contact, id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { success: true, code: 200, data: { message: "Contacto actualizando correctamente" } }];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, { success: false, code: 500, data: { message: err_4.message } }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ContactService.prototype.getPDF = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pdf, contenido, pdfReport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pdf = require('html-pdf');
                        contenido = "<h1>Esto es un test de html-pdf</h1><p>Estoy generando PDF a partir de este c\u00F3digo HTML sencillo</p>";
                        return [4 /*yield*/, pdf.create(contenido).toFile('salida.pdf', function (err, res) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log(res);
                                }
                            })];
                    case 1:
                        pdfReport = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContactService;
}());
exports.default = new ContactService();
//# sourceMappingURL=ContactService.js.map