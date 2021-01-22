"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownErrorSchema = exports.notFoundErrorSchema = exports.unauthorizedErrorSchema = exports.badRequestErrorSchema = exports.errorSchema = void 0;
const Joi = require("@hapi/joi");
exports.errorSchema = Joi.object({
    status: Joi.number()
        .example(500)
        .required(),
    detail: Joi.string()
        .example('Fatal issue')
        .allow(null)
        .allow('')
        .required(),
    title: Joi.string()
        .example('Unknown error')
        .required(),
});
exports.badRequestErrorSchema = Joi.object({
    errors: Joi.array().items(exports.errorSchema.example({
        status: 400,
        detail: '',
        title: 'Bad input request',
    })),
}).description('Provided input is invalid');
exports.unauthorizedErrorSchema = Joi.object({
    errors: Joi.array().items(exports.errorSchema.example({
        status: 401,
        detail: '',
        title: 'Authentication information is missing or invalid',
    })),
}).description('Authentication information is missing or invalid');
exports.notFoundErrorSchema = Joi.object({
    errors: Joi.array().items(exports.errorSchema.example({
        status: 404,
        detail: '',
        title: 'Not Found',
    })),
}).description('Not Found');
exports.unknownErrorSchema = Joi.object({
    errors: Joi.array().items(exports.errorSchema.example({
        status: 500,
        detail: '',
        title: 'Unknown error',
    })),
}).description('Unknown error');
