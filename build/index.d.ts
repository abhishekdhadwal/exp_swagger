import { getSwagger } from './swagger';
import { validateSchema, validateValue } from './lib/validator';
import { IOptions, IRouteResult, ITemplateRoute } from './interfaces';
export declare const router: {
    use: (app: any, prefix?: string) => IRouteResult;
};
export declare const isValidationError: (error: object) => boolean;
export * from './swagger/errors';
export * from './constants';
export * from './interfaces';
export { IOptions, ITemplateRoute, getSwagger, validateValue, validateSchema };
