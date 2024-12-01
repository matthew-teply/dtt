import type { IEntityCharacter } from '../character';

export interface IEntityCompany
{
    id: string;
    name: string;
    founder: IEntityCharacter;
}