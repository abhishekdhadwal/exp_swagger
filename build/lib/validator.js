"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateValue = exports.validateSchema = void 0;
const Joi = require("@hapi/joi");
const celebrate_1 = require("celebrate");
const validateSchema = (schema, options = {}) => {
    return async (req, res, next) => {
        celebrate_1.celebrate(schema, options)(req, res, next);
    };
};
exports.validateSchema = validateSchema;
const validateValue = (value, schema, options = { abortEarly: false }) => {
    const result = Joi.validate(value, schema, options);
    return result.error
        ? { isValid: false, errors: result.error.details }
        : { isValid: true, errors: [] };
};
exports.validateValue = validateValue;
