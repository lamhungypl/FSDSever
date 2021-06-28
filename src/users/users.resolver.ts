import { NotFoundException } from '@nestjs/common';
import { Args, PartialType, Query, Resolver } from '@nestjs/graphql';
// import { Recipe } from 'src/recipes/models/recipe.model';
import { User } from './models/user.entity';
import { UsersService } from './users.service';

@Resolver('/users')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User])
  async getUser(@Args('id') id: string) {
    const users = await this.userService.list({});
    console.log({ users });
    if (!users) {
      throw new NotFoundException(id);
    }
    return users;
  }

  @Query(() => [User])
  async getUsers() {
    const users = await this.userService.list({});
    // const user = this.userService.list();
    if (!users) {
      throw new NotFoundException();
    }
    return users;
  }
}
