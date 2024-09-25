import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
class Name {
    @Field()
    common: string;

    @Field()
    official: string;

    @Field(() => [NativeName])
    nativeName: NativeName[];
}

@ObjectType()
class NativeName {
    @Field()
    language: string;

    @Field()
    common: string;

    @Field()
    official: string;
}

@ObjectType()
class Language {
    @Field()
    code: string;

    @Field()
    name: string;
}

@ObjectType()
class Currency {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    symbol?: string;
}

@ObjectType()
class Flag {
    @Field()
    png: string;

    @Field()
    svg: string;
}

@Entity({ name: 'countries' })
@ObjectType()
export class Country {
    @PrimaryColumn({ unique: true })
    @Field()
    code: string;

    @Column({ type: 'jsonb' })
    @Field(() => Name)
    name: Name;

    @Column({ nullable: true })
    @Field({ nullable: true })
    capital?: string;

    @Column()
    @Field()
    region: string;

    @Column({ name: 'sub_region', nullable: true })
    @Field({ nullable: true })
    subRegion?: string;

    @Column({ type: 'jsonb' })
    @Field(() => [Language])
    languages: Language[];

    @Column({ type: 'jsonb' })
    @Field(() => [Currency])
    currencies: Currency[];

    @Column()
    @Field(() => Int)
    population: number;

    @Column({ type: 'real' })
    @Field(() => Float)
    area: number;

    @Column('real', { array: true })
    @Field(() => [Float])
    coordinates: number[];

    @Column({ type: 'jsonb' })
    @Field(() => Flag)
    flags: Flag;

    constructor(init?: Partial<Country>) {
        Object.assign(this, init);
    }
}
