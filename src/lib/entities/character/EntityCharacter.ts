import { Entity } from '../entity';
import type { IEntityCharacter } from './IEntityCharacter';
import type { TGender } from './types';

export class EntityCharacter extends Entity implements IEntityCharacter
{
    name: string;
    gender: TGender;

    constructor(name: string, gender: TGender) {
        super();

        this.name = name;
        this.gender = gender;
    }
}