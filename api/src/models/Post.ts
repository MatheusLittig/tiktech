import { Field, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import User from './User'

@Entity()
@ObjectType()
export default class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => User)
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Field(() => String)
  @Column()
  description: string

  @Field(() => String)
  @Column()
  midia: string

  @Field(() => String)
  @Column()
  likes: number

  // @Field(() => Post)
  // @ManyToOne(() => Post)
  // @Column()
  // comments: Post[]

  @Field(() => Number)
  @Column()
  shares: number

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date

  @Field(() => Date)
  @CreateDateColumn()
  updated_at: Date
}
