import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { User } from './models/user.model';
import { UserRepository } from './models/user.repository';

// @Injectable()
// export class UsersService extends BaseService<User, UserRepository> {}

@Injectable()
export class UsersService {
  public list(options?: FindManyOptions<User>) {
    const user = new User();
    user.username = 'username';
    user.email = 'email';
    user.id = Math.random().toFixed(4).toString();
    return [user, user];
  }

  public count(options: FindManyOptions<User>) {
    return 12;
  }

  public create(newModel) {
    return { ...newModel };
  }

  public update(id: number | string, newModel) {
    return { ...newModel };
  }

  public findOne(options?: FindOneOptions<User>) {
    return {};
  }

  public findOneById(
    id?: string | number | Date,
    options?: FindOneOptions<User>,
  ) {
    const user = new User();
    return user;
  }
}
