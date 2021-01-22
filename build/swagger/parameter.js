"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParameters = void 0;
const j2s = require('joi-to-swagger');
const lodash = require('lodash');
const definition_1 = require("./definition");
const getParameters = (swagger, input) => {
    if (!input)
        return [];
    const { header, body, formData, query, params } = input;
    const result = [];
    if (header) {
        const { swagger } = j2s(header);
        const { properties, required } = swagger;
        Object.keys(properties).forEach((key) => {
            let check_required = lodash.includes(required, key);
            let set_required = false;
            if (check_required == true) {
                set_required = true;
            }
            result.push({
                in: 'header',
                name: key,
                required: set_required,
                ...properties[key],
            });
        });
    }
    if (body) {
        const definition = definition_1.getDefinition(swagger, body, 'Input');
        result.push({
            in: 'body',
            name: definition,
            required: true,
            schema: {
                $ref: `#/definitions/${definition}`,
            },
        });
    }
    if (formData) {
        const { swagger } = j2s(formData);
        const { properties, required } = swagger;
        Object.keys(properties).forEach((key) => {
            let check_required = lodash.includes(required, key);
            let set_required = false;
            if (check_required == true) {
                set_required = true;
            }
            result.push({
                in: 'formData',
                name: key,
                required: set_required,
                ...properties[key],
            });
        });
    }
    if (query) {
        const { swagger } = j2s(query);
        const { properties, required } = swagger;
        Object.keys(properties).forEach((key) => {
            let check_required = lodash.includes(required, key);
            let set_required = false;
            if (check_required == true) {
                set_required = true;
            }
            result.push({
                in: 'query',
                name: key,
                required: set_required,
                ...properties[key],
            });
        });
    }
    if (params) {
        const { swagger } = j2s(params);
        const { properties } = swagger;
        Object.keys(properties).forEach((key) => {
            result.push({
                in: 'path',
                name: key,
                required: true,
                ...properties[key],
            });
        });
    }
    return result;
};
exports.getParameters = getParameters;
