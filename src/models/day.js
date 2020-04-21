"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = void 0;
const mongoose_1 = require("mongoose");
const daySchema = new mongoose_1.Schema({
    title: String,
    content: String,
    author: String
}, {
    timestamps: true
});
exports.Day = mongoose_1.model('Day', daySchema);
//# sourceMappingURL=day.js.map