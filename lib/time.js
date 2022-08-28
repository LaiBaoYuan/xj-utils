"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormatter = exports.timeFormatter = void 0;
const moment_1 = __importDefault(require("moment"));
/**
 * 日期格式转化 年月日时分秒
 * @param val 日期对象
 * @returns 格式化字符串
 */
function timeFormatter(val) {
    return (0, moment_1.default)(val).format('YYYY-MM-DD HH:mm:ss');
}
exports.timeFormatter = timeFormatter;
/**
 * 日期格式转化 年月日
 * @param val 日期对象
 * @returns 格式化字符串
 */
function dateFormatter(val) {
    return (0, moment_1.default)(val).format('YYYY-MM-DD');
}
exports.dateFormatter = dateFormatter;
