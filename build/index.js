"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = exports.validateValue = exports.getSwagger = exports.isValidationError = exports.router = void 0;
const celebrate_1 = require("celebrate");
const swagger_1 = require("./swagger");
Object.defineProperty(exports, "getSwagger", { enumerable: true, get: function () { return swagger_1.getSwagger; } });
const validator_1 = require("./lib/validator");
Object.defineProperty(exports, "validateSchema", { enumerable: true, get: function () { return validator_1.validateSchema; } });
Object.defineProperty(exports, "validateValue", { enumerable: true, get: function () { return validator_1.validateValue; } });
const constants_1 = require("./constants");
const addRoute = (app, options, ...args) => {
    const { method, path: rawPath, prefix = '', input = null, schemaOptions = {}, docs = true, } = options;
    const path = rawPath === '/' ? prefix : `${prefix}${rawPath}`;
    if (docs) {
        swagger_1.generateSwagger(path, method, options);
    }
    input && Object.keys(input).length > 0
        ? app[method](path, validator_1.validateSchema(input, schemaOptions), ...args)
        : app[method](path, args);
    return exports.router.use(app, prefix);
};
exports.router = {
    use: (app, prefix = '') => ({
        get: (path, options, ...args) => addRoute(app, { ...options, path, prefix, method: constants_1.HttpMethod.Get }, ...args),
        post: (path, options, ...args) => addRoute(app, { ...options, path, prefix, method: constants_1.HttpMethod.Post }, ...args),
        put: (path, options, ...args) => addRoute(app, { ...options, path, prefix, method: constants_1.HttpMethod.Put }, ...args),
        patch: (path, options, ...args) => addRoute(app, { ...options, path, prefix, method: constants_1.HttpMethod.Patch }, ...args),
        delete: (path, options, ...args) => addRoute(app, { ...options, path, prefix, method: constants_1.HttpMethod.Delete }, ...args),
        template: ({ path, method, ...otherOpts }, ...args) => addRoute(app, { ...otherOpts, path, prefix, method }, ...args),
    }),
};
const isValidationError = (error) => celebrate_1.isCelebrate(error);
exports.isValidationError = isValidationError;
__exportStar(require("./swagger/errors"), exports);
__exportStar(require("./constants"), exports);
__exportStar(require("./interfaces"), exports);
