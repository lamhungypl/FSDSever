import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(),
    RecipesModule,
    UsersModule,
  ],
})
export class AppModule {}
