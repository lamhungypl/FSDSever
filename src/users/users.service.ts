import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';

import { User } from './models/user.entity';
import { UserRepository } from './models/user.repository';

// @Injectable()
// export class UsersService extends BaseService<User, UserRepository> {}

@Injectable()
export class UsersService extends BaseService<User, UserRepository> {
  constructor(@InjectRepository(UserRepository) repository: UserRepository) {
    super(repository);
  }
}
