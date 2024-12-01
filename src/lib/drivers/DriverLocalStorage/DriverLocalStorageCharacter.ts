import type { IEntityCharacter } from '$lib/entities';
import type { IDriverCharacter } from '../interfaces/IDriverCharacter';
import { LOCAL_STORAGE_TABLE_CHARACTER } from './constants';
import { LocalStorage } from './LocalStorage';

export class DriverLocalStorageCharacter extends LocalStorage implements IDriverCharacter
{
    set = (character: IEntityCharacter) => {
        this.setItem(LOCAL_STORAGE_TABLE_CHARACTER, character.id, character);
    }

    get = (characterId: string): IEntityCharacter => {
        return this.getItem(LOCAL_STORAGE_TABLE_CHARACTER, characterId) as IEntityCharacter;
    }

    update = (character: IEntityCharacter, characterId: string) => {
        this.setItem(LOCAL_STORAGE_TABLE_CHARACTER, characterId, character);
    }
    
    delete = (characterId: string) => {
        this.deleteItem(LOCAL_STORAGE_TABLE_CHARACTER, characterId);
    }

    list = () => {
        return this.listItems(LOCAL_STORAGE_TABLE_CHARACTER);
    }
}