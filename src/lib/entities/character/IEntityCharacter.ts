import type { IEntity } from '../entity';
import type { TGender } from './types';

export interface IEntityCharacter extends IEntity
{
    name: string;
    gender: TGender;
}