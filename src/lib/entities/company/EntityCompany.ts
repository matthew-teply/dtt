import type { IEntityCharacter } from '../character';
import { Entity } from '../entity';
import type { IEntityCompany } from './IEntityCompany';

export class EntityCompany extends Entity implements IEntityCompany
{
    name: string;
    founder: IEntityCharacter;

    constructor(name: string, founder: IEntityCharacter) {
        super();
        
        this.name = name;
        this.founder = founder;
    }
}