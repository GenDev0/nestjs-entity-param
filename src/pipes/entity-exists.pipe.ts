// src/pipes/entity-exists.pipe.ts
import { PipeTransform, NotFoundException } from "@nestjs/common";
import { FindById } from "../interfaces/find-by-id.interface";

export class EntityExistsPipe<T> implements PipeTransform<number, Promise<T>> {
  constructor(
    private readonly service: FindById<T>,
    private readonly entityName = "Entity"
  ) {}

  async transform(id: number): Promise<T> {
    const entity = await this.service.findById(id);
    if (!entity) {
      throw new NotFoundException(`${this.entityName} with ID ${id} not found`);
    }
    return entity;
  }
}
