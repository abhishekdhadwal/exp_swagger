import { IInput, ISwaggerDefinition } from '../interfaces';
export declare const getParameters: (swagger: ISwaggerDefinition, input?: IInput) => {
    in: string;
    name: string;
    required: boolean;
    schema: {
        $ref: string;
    };
}[];
