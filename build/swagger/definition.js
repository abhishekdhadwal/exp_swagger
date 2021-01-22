"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefinition = void 0;
const ramda_1 = require("ramda");
const j2s = require('joi-to-swagger');
const swagger_1 = require("../swagger");
const getDefinition = (swagger, values, type) => {
    const { _meta: meta } = values;
    const fallback = Math.random()
        .toString(36)
        .substr(2, 9);
    const definition = ramda_1.propOr(fallback, 'definition', meta[0]);
    const name = `${definition}${type}`;
    if (swagger.definitions.hasOwnProperty(name))
        return name;
    const result = j2s(values, swagger.definitions);
    swagger_1.updateSwagger('definitions', { [name]: result.swagger });
    return name;
};
exports.getDefinition = getDefinition;
