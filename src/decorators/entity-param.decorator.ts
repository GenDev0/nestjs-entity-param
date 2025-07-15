// src/decorators/entity-param.decorator.ts
import { Param, ParseIntPipe } from "@nestjs/common";

/**
 * Used like:
 * @EntityParam('id', 'PostExistsPipe')
 */
export function EntityParam(
  param: string,
  pipeToken: string
): ParameterDecorator {
  return Param(param, ParseIntPipe, pipeToken as any);
}
