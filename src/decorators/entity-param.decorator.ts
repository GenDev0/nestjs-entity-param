import { Param, ParseIntPipe } from "@nestjs/common";
import { EntityExistsPipe } from "../pipes/entity-exists.pipe";
import { FindById } from "../interfaces/find-by-id.interface";

export function EntityParam<T>(
  param: string,
  service: FindById<T>,
  entityName: string
): ParameterDecorator {
  return function (target, propertyKey, parameterIndex) {
    Param(param, ParseIntPipe, new EntityExistsPipe<T>(service, entityName))(
      target,
      propertyKey,
      parameterIndex
    );
  };
}
