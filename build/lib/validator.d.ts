import { IValidateResponse } from '../interfaces';
export declare const validateSchema: (schema: object, options?: object) => (req: any, res: any, next: any) => Promise<void>;
export declare const validateValue: <T>(value: T, schema: any, options?: any) => IValidateResponse;
