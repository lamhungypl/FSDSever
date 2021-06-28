import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
export class User {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  password: string;
}
