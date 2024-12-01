import type { TDrivers } from '$lib/drivers';

import { DatabaseCharacter } from './DatabaseCharacter';
import { DatabaseCompany } from './DatabaseCompany';

export class Database
{
    characters: DatabaseCharacter;
    companies: DatabaseCompany;

    constructor(drivers: TDrivers) {
        this.characters = new DatabaseCharacter(drivers.charachter);
        this.companies = new DatabaseCompany(drivers.company);
    }
}