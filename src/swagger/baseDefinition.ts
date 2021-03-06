

import { ISwaggerDefinition, ISwaggerBaseDefinition } from '../interfaces';

export const baseDefinition = ({
  title,
  description,
  host,
  basePath,
  contact,
  version,
  apiVersion = '2.0',
}: ISwaggerBaseDefinition): ISwaggerDefinition => ({
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
  definitions: {
    // BadRequestError: j2s(badRequestErrorSchema).swagger,
    // NotFoundError: j2s(notFoundErrorSchema).swagger,
    // UnauthorizedError: j2s(unauthorizedErrorSchema).swagger,
    // UnknownError: j2s(unknownErrorSchema).swagger,
  },
});
