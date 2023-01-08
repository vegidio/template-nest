import { ApiHideProperty } from '@nestjs/swagger';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    username: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Exclude()
    @ApiHideProperty()
    hash: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
