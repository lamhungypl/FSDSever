import { NotFoundException } from '@nestjs/common';
import { Args, PartialType, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from 'src/recipes/models/recipe.model';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver('/users')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => User)
  async getUser(@Args('id') id: string) {
    const user = new User();
    // const user = this.userService.list();
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }
}
