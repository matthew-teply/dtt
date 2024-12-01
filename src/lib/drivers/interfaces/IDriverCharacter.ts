import type { IEntityCharacter } from '$lib/entities/character';

export interface IDriverCharacter
{
    set: (character: IEntityCharacter) => void;

    get: (characterId: string) => IEntityCharacter;

    update: (character: IEntityCharacter, characterId: string) => void;

    delete: (characterId: string) => void;

    list: () => IEntityCharacter[];
}