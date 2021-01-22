"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseDefinition = void 0;
const baseDefinition = ({ title, description, host, basePath, contact, version, apiVersion = '2.0', }) => ({
    host,
    basePath,
    swagger: apiVersion,
    info: {
        title,
        description,
        version,
        contact,
    },
    paths: {},
    definitions: {},
});
exports.baseDefinition = baseDefinition;
