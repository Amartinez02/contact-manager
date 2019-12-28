"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var T24Config = /** @class */ (function () {
    function T24Config() {
        this.CUSTOMER_BENEFICIARY = "71";
        this.CREATE_BENEFICIARY_INTERNAL = "70";
        this.CREATE_BENEFICIARY_EXTERNAL = "72";
        this.UPDATE_BENEFICIARY = "78";
        this.DELETE_BENEFICIARY = "77";
        this.ACC_INTERNAL = "DOP1761500050017";
        this.TXN_TYPE_INTERNAL_ACC = "AC14";
        this.TXN_TYPE_INTERNAL_TC = "AC09";
        this.TXN_TYPE_INTERNAL_PR = "ACIT";
        this.TXN_TYPE_EXTERNAL_ACC = "AC25";
        this.TXN_TYPE_EXTERNAL_TC = "AC28";
        this.TXN_TYPE_EXTERNAL_PR = "AC08";
        // public URLAPI = "http://srvltw1.apap.com.do:8530/IVRInterfaceTWS/services?wsdl";
        this.URLAPI = "https://t24apap.apap.com.do:9443/IVRInterfaceTWS/services?wsdl";
    }
    return T24Config;
}());
exports.default = new T24Config();
//# sourceMappingURL=t24Config.js.map