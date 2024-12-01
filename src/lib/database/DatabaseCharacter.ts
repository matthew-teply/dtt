import type { IDriverCharacter } from '$lib/drivers';
import type { IEntityCharacter } from '$lib/entities/character';

export class DatabaseCharacter {
    private driver: IDriverCharacter;

    constructor(driver: IDriverCharacter) {
        this.driver = driver;
    }

    set = (characher: IEntityCharacter) => {
        this.driver.set(characher);
    }

    get = (characherId: string): IEntityCharacter => {
        return this.driver.get(characherId);
    }

    update = (characher: IEntityCharacter, characherId: string) => {
        this.driver.update(characher, characherId);
    }

    delete = (characherId: string) => {
        this.driver.delete(characherId);
    }

    list = () => {
        return this.driver.list();
    }
}