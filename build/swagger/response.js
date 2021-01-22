"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponses = exports.getSingleDefinition = exports.getObjectDefinition = void 0;
const definition_1 = require("./definition");
const getObjectDefinition = (swagger, value) => {
    const properties = Object.entries(value).reduce((result, [key, value]) => {
        const definition = definition_1.getDefinition(swagger, value, 'Result');
        return {
            ...result,
            [key]: {
                $ref: `#/definitions/${definition}`,
            },
        };
    }, {});
    return {
        schema: {
            properties,
            type: 'object',
        },
    };
};
exports.getObjectDefinition = getObjectDefinition;
const getSingleDefinition = (swagger, value) => {
    const definition = definition_1.getDefinition(swagger, value, 'Result');
    return {
        schema: {
            $ref: `#/definitions/${definition}`,
        },
    };
};
exports.getSingleDefinition = getSingleDefinition;
const getResponses = (swagger, output) => {
    const responses = {
        200: {
            description: 'Success',
            schema: {
                type: 'string'
            }
        },
    };
    if (output) {
        Object.entries(output).forEach(([key, value]) => {
            if (!value.isJoi && value instanceof Object) {
                Object.assign(responses[key], exports.getObjectDefinition(swagger, value));
            }
            else {
                Object.assign(responses[key], exports.getSingleDefinition(swagger, value));
            }
        });
    }
    return responses;
};
exports.getResponses = getResponses;
