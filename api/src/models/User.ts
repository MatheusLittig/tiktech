import { Field, ObjectType, ID } from 'type-graphql'
import {
  BaseEntity,
  Column,
  // CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
  // UpdateDateColumn
} from 'typeorm'

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String)
  @Column()
  name: string

  @Field(() => String)
  @Column()
  avatar?: string

  @Field(() => String)
  @Column()
  email: string

  @Field(() => String)
  @Column()
  password: string

  // @Field(() => Date)
  // @CreateDateColumn()
  // created_at: Date

  // @Field(() => Date)
  // @UpdateDateColumn()
  // updated_at: Date
}
