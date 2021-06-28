import { Column } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Field } from '@nestjs/graphql';

export abstract class BaseModel {
  // @Exclude()
  // @Column({ name: 'created_by' })
  // public createdBy: number;
  @Field()
  @Column({ name: 'created_date' })
  public createdDate: string;

  // @Exclude()
  // @Column({ name: 'modified_by' })
  // public modifiedBy: number;
  @Field()
  @Exclude()
  @Column({ name: 'modified_date' })
  public modifiedDate: string;
}
