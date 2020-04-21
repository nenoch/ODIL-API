"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDay = exports.removeDayById = exports.postDay = exports.getDays = void 0;
const mongoose = require("mongoose");
const day_1 = require("../models/day");
/**
 * @returns Promise
 * GET Day[]
 */
function getDays() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield day_1.Day.find().lean();
    });
}
exports.getDays = getDays;
/**
 * @param {Object} dayData IDay payload
 * @returns Promise
 * POST Day
 * Create
 */
function postDay(dayData) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Object.keys(dayData).length === 0)
            throw 'the body of the request can not be empty';
        if (!dayData.content)
            throw 'the content can not be empty';
        const day = new day_1.Day({
            title: dayData.title || 'Untitled Day',
            content: dayData.content,
            author: dayData.author || 'Anon odiler'
        });
        day.save();
        return day.toObject();
    });
}
exports.postDay = postDay;
/**
 * @returns Promise
 * DELETE Day
 */
function removeDayById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw 'Invalid ID';
        return yield day_1.Day.findOneAndRemove({ _id: id }).lean();
    });
}
exports.removeDayById = removeDayById;
/**
 * @param {string} id Day ID
 * @param {Object} patch partial IDay payload
 * @returns Promise
 * PATCH Day
 */
function updateDay(id, patch) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw 'Invalid ID';
        return yield day_1.Day.findOneAndUpdate({ _id: id }, patch, { new: true }).lean();
    });
}
exports.updateDay = updateDay;
//# sourceMappingURL=day.js.map