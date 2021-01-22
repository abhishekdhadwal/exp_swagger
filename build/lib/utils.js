"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanPath = void 0;
const cleanPath = (path) => path.replace(/:+/g, '{').replace(/({+\w+)()/g, '$1}$2');
exports.cleanPath = cleanPath;
