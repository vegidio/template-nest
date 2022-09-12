import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'countries' })
export class Country extends BaseEntity {
    @PrimaryColumn({ unique: true })
    code: string;

    @Column({ type: 'jsonb' })
    name: {
        common: string;
        official: string;
        nativeName: {
            language: string;
            common: string;
            official: string;
        }[];
    };

    @Column({ nullable: true })
    capital?: string;

    @Column()
    region: string;

    @Column({ name: 'sub_region', nullable: true })
    subRegion?: string;

    @Column({ type: 'jsonb' })
    languages: {
        code: string;
        name: string;
    }[];

    @Column({ type: 'jsonb' })
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];

    @Column()
    population: number;

    @Column({ type: 'decimal' })
    area: number;

    @Column('decimal', { array: true })
    coordinates: number[];

    @Column({ type: 'jsonb' })
    flags: {
        png: string;
        svg: string;
    };

    constructor(init?: Partial<Country>) {
        super();
        Object.assign(this, init);
    }
}
