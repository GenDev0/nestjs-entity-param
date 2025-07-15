import { applyDecorators, Param, ParseIntPipe } from "@nestjs/common";
import { EntityExistsPipe } from "../pipes/entity-exists.pipe";
import { FindById } from "../interfaces/find-by-id.interface";

export function EntityParam<T>(
  param: string,
  service: FindById<T>,
  entityName: string
) {
  return applyDecorators(
    Param(param, ParseIntPipe, new EntityExistsPipe<T>(service, entityName))
  );
}
