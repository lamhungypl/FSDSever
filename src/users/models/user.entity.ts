import { Field, ObjectType } from '@nestjs/graphql';
import { format } from 'date-fns';
import { BaseModel } from 'src/common/base.model';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users', orderBy: { createdDate: 'ASC' } })
@ObjectType()
export class User extends BaseModel {
  @Field()
  @PrimaryGeneratedColumn({ name: 'user_id' })
  public userId: string;

  @Field({ nullable: true })
  @Column({ name: 'username' })
  public username: string;

  @Field({ nullable: true })
  @Column({ name: 'email' })
  public email: string;

  @Field()
  @Column({ name: 'password' })
  public password: string;

  @BeforeInsert()
  public async createDetails(): Promise<void> {
    this.createdDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }

  @BeforeUpdate()
  public async updateDetails(): Promise<void> {
    this.modifiedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }
}
