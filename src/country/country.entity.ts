import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'countries' })
export class Country {
    @PrimaryColumn({ unique: true })
    code: string;

    @Column({ type: 'jsonb' })
    name: {
        common: string;
        official: string;
        nativeName: NativeName[];
    };

    @Column({ nullable: true })
    capital?: string;

    @Column()
    region: string;

    @Column({ name: 'sub_region', nullable: true })
    subRegion?: string;

    @Column({ type: 'jsonb' })
    languages: Language[];

    @Column({ type: 'jsonb' })
    currencies: Currency[];

    @Column()
    population: number;

    @Column({ type: 'real' })
    area: number;

    @Column('real', { array: true })
    coordinates: number[];

    @Column({ type: 'jsonb' })
    flags: {
        png: string;
        svg: string;
    };

    constructor(init?: Partial<Country>) {
        Object.assign(this, init);
    }
}

class NativeName {
    language: string;
    common: string;
    official: string;
}

class Language {
    code: string;
    name: string;
}

class Currency {
    code: string;
    name: string;
    symbol: string;
}
