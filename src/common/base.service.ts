import { FindManyOptions, FindOneOptions, ObjectID, Repository } from 'typeorm';
import { BaseModel } from './base.model';

export interface BaseServiceImpl<T> {
  create(newModel: T): Promise<T>;
  update(id, newModel: T): Promise<T>;
  list(options: FindManyOptions<T>): Promise<T[]>;
  findOne(options?: FindOneOptions<T>): Promise<T | undefined>;
  count(options: FindManyOptions<T>): Promise<number>;
}

export class BaseService<T extends BaseModel, R extends Repository<T>>
  implements BaseServiceImpl<T>
{
  public readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }
  public list(options: FindManyOptions<T>) {
    return this.repository.find(options);
  }

  public count(options: FindManyOptions<T>) {
    return this.repository.count(options);
  }

  public create(newModel: T) {
    return this.repository.save(newModel as any);
  }

  public update(id: number | string, newModel: T) {
    return this.repository.save(newModel as any);
  }

  public findOne(options?: FindOneOptions<T>) {
    return this.repository.findOne(options);
  }

  public findOneById(
    id?: string | number | Date | ObjectID,
    options?: FindOneOptions<T>,
  ) {
    return this.repository.findOne(id, options);
  }
}
