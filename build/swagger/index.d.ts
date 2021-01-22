import { IDocsOptions, ISwaggerOptions, ISwaggerDefinition } from '../interfaces';
import { HttpMethod } from '../constants';
export declare const updateSwagger: (key: string, values: object) => any;
export declare const generateSwagger: (path: string, method: HttpMethod, options: IDocsOptions) => void;
export declare const getSwagger: (options?: ISwaggerOptions) => ISwaggerDefinition;
