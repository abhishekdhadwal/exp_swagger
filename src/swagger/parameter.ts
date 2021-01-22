
const j2s = require('joi-to-swagger');
const lodash = require('lodash');
import { IInput, ISwaggerDefinition, ISchema } from '../interfaces';
import { getDefinition } from './definition';
// import lodash from 'lodash';


export const getParameters = (swagger: ISwaggerDefinition, input?: IInput) => {
  if (!input) return [];

  const { header, body, formData, query, params } = input;
  const result : {
    in : string;
    name : string;
    required : boolean;
    schema : {
      $ref : string;
    };
  }[] = [];

  if(header) {
    const { swagger } = j2s(header as ISchema);
    const { properties, required } = swagger;

    Object.keys(properties).forEach((key) => { 

        let check_required = lodash.includes(required, key)
        let set_required = false
        if(check_required == true) { set_required = true }

        result.push({
            in: 'header',
            name: key,
            required : set_required,
            ...properties[key],
        });           

    });

}

if (body) {
    const definition = getDefinition(swagger, body, 'Input');
    result.push({
      in: 'body',
      name: definition,
      required: true,
      schema: {
        $ref: `#/definitions/${definition}`,
      },
    });
  }

if (formData) {

    const { swagger } = j2s(formData as ISchema);
    const { properties, required } = swagger;
                    
   Object.keys(properties).forEach((key) => { 

        let check_required = lodash.includes(required, key)
        let set_required = false
        if(check_required == true) { set_required = true }

        result.push({
            in: 'formData',
            name: key,
            required : set_required,
            ...properties[key],
        });           

    })
    
}

if (query) {
    const { swagger } = j2s(query as ISchema);
    const { properties, required } = swagger;

    Object.keys(properties).forEach((key) => { 

        let check_required = lodash.includes(required, key)
        let set_required = false
        if(check_required == true) { set_required = true }

        result.push({
            in: 'query',
            name: key,
            required : set_required,
            ...properties[key],
        });           

    });
}

if (params) {
    const { swagger } = j2s(params as ISchema);
    const { properties } = swagger;
    Object.keys(properties).forEach((key) => {
        result.push({
            in: 'path',
            name: key,
            required: true,
            ...properties[key],
        });
    });
}

  return result;
};
