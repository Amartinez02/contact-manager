"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactCtrl_1 = require("../controllers/ContactCtrl");
var AppRoute = /** @class */ (function () {
    function AppRoute() {
        this.ContactCtrl = new ContactCtrl_1.ContactCtrl();
        this.path = "/api/contact-manager/";
    }
    AppRoute.prototype.routes = function (app) {
        app.route(this.path + "contacts").get(this.ContactCtrl.getContacts);
        app.route(this.path + "contacts/locality/:locality_id").get(this.ContactCtrl.getContacts);
        app.route(this.path + "contact/").post(this.ContactCtrl.createContact);
        app.route(this.path + "contact/").put(this.ContactCtrl.updateContact);
        app.route(this.path + "contact/:contact_id").delete(this.ContactCtrl.deleteContact);
        // app.route(this.path + "contacts/pdf").get(this.ContactCtrl.getContactsPDF);
    };
    return AppRoute;
}());
exports.AppRoute = AppRoute;
//# sourceMappingURL=appRoute.js.map