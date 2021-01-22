import { IOutput, ISwaggerDefinition, ISchema } from '../interfaces';
export declare const getObjectDefinition: (swagger: ISwaggerDefinition, value: {
    [key: string]: any;
}) => {
    schema: {
        properties: {};
        type: string;
    };
};
export declare const getSingleDefinition: (swagger: ISwaggerDefinition, value: ISchema) => {
    schema: {
        $ref: string;
    };
};
export declare const getResponses: (swagger: ISwaggerDefinition, output?: IOutput) => {
    200: {
        description: string;
        schema: {
            type: string;
        };
    };
};
