"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthentication = void 0;
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["BASIC"] = "basic";
})(AuthenticationType || (AuthenticationType = {}));
const basicConfig = {
    securityDefinitions: {
        basicAuth: {
            type: 'basic',
        },
    },
    security: [{ basicAuth: [] }],
};
const authenticationConfiguration = {
    [AuthenticationType.BASIC]: basicConfig,
};
const getAuthentication = (type) => authenticationConfiguration[type];
exports.getAuthentication = getAuthentication;
