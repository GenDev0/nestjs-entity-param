import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common";
import { FindById } from "../interfaces/find-by-id.interface";

@Injectable()
export class EntityExistsPipe<T> implements PipeTransform<number, Promise<T>> {
  constructor(
    private readonly service: FindById<T>,
    private readonly entityName: string = "Entity"
  ) {}

  async transform(value: number, metadata: ArgumentMetadata): Promise<T> {
    const entity = await this.service.findById(value);
    if (!entity) {
      throw new NotFoundException(
        `${this.entityName} with ID ${value} not found`
      );
    }
    return entity;
  }
}
