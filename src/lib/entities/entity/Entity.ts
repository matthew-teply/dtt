import { v4 as uuidv4 } from 'uuid';
import type { IEntity } from './IEntity';

export class Entity implements IEntity
{
    id: string = uuidv4();
}