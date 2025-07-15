// src/pipes/entity-exists.provider.ts
import { Provider, Type } from "@nestjs/common";
import { FindById } from "../interfaces/find-by-id.interface";
import { EntityExistsPipe } from "./entity-exists.pipe";

export function createEntityExistsPipeProvider<T>(
  pipeToken: string,
  service: Type<FindById<T>>,
  entityName: string
): Provider {
  return {
    provide: pipeToken,
    useFactory: (svc: FindById<T>) => new EntityExistsPipe<T>(svc, entityName),
    inject: [service],
  };
}
