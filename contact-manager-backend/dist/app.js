"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var env = require("dotenv");
env.config();
server_1.default.app.listen(process.env.PORT, function () {
    console.log('Express server listening on port ' + process.env.PORT);
});
//# sourceMappingURL=app.js.map