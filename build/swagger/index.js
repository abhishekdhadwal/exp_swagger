"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwagger = exports.generateSwagger = exports.updateSwagger = void 0;
const utils_1 = require("../lib/utils");
const baseDefinition_1 = require("./baseDefinition");
const parameter_1 = require("./parameter");
const response_1 = require("./response");
const auth_1 = require("./auth");
var SwaggerDefaultConfig;
(function (SwaggerDefaultConfig) {
    SwaggerDefaultConfig["VERSION"] = "2.0";
    SwaggerDefaultConfig["HOST"] = "";
})(SwaggerDefaultConfig || (SwaggerDefaultConfig = {}));
const globalSwagger = {
    ...baseDefinition_1.baseDefinition({
        title: 'Default swagger title',
        description: 'The API is documented here',
        host: 'localhost:3000',
        basePath: '/',
        version: '1.0',
        apiVersion: '2.0',
    }),
};
const updateSwagger = (key, values) => Object.assign(globalSwagger[key], values);
exports.updateSwagger = updateSwagger;
const generateSwagger = (path, method, options) => {
    const { input, output, contentTypes = ['application/json'], summary, description, tags = [], } = options;
    const cleanedPath = utils_1.cleanPath(path);
    const result = {
        [method]: {
            tags,
            produces: contentTypes,
            parameters: parameter_1.getParameters(globalSwagger, input),
            responses: response_1.getResponses(globalSwagger, output),
            ...(summary && { summary }),
            ...(description && { description }),
        },
    };
    if (globalSwagger.paths.hasOwnProperty(cleanedPath)) {
        Object.assign(globalSwagger.paths[cleanedPath], result);
    }
    else {
        exports.updateSwagger('paths', { [cleanedPath]: result });
    }
};
exports.generateSwagger = generateSwagger;
const getSwagger = (options = {}) => {
    const { apiVersion = SwaggerDefaultConfig.VERSION, host = SwaggerDefaultConfig.HOST, auth, ...otherOptions } = options;
    const authentication = auth_1.getAuthentication(auth);
    const result = {
        ...globalSwagger,
        ...authentication,
        host,
        info: {
            ...globalSwagger.info,
            ...otherOptions,
        },
    };
    return result;
};
exports.getSwagger = getSwagger;
