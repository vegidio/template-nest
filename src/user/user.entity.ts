import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    @ApiHideProperty()
    hash: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
