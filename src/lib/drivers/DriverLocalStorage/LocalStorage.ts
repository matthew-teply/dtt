import { browser } from '$app/environment';
import type { IEntityCharacter } from '$lib/entities/character';
import { LOCAL_STORAGE_TABLE_CHARACTER, LOCAL_STORAGE_TABLE_COMPANY } from './constants';
import type { TKeyValueObject } from './types';

export class LocalStorage
{
    private requiredTables = [
        LOCAL_STORAGE_TABLE_CHARACTER,
        LOCAL_STORAGE_TABLE_COMPANY,
    ];

    private hasCheckedTables = false;

    private checkBrowser = (): void => {
        if (!browser) {
            throw new Error('DriverLocalStorage is not running in a browser');
        }
    }

    private checkRequiredTables = (): void => {
        if (this.hasCheckedTables) {
            return;
        }

        for (const requiredTable of this.requiredTables) {
            if (!localStorage.hasOwnProperty(requiredTable)) {
                localStorage.setItem(requiredTable, JSON.stringify({}));
            }
        }

        this.hasCheckedTables = true;
    }

    private getTable = (table: string): TKeyValueObject => {
        const storageTable = localStorage.getItem(table);

        if (storageTable === null) {
            throw new Error(`Table ${table} does not exist`);
        }

        return JSON.parse(storageTable) as TKeyValueObject;
    }

    setItem = <T = any>(table: string, key: string, value: T) => {
        this.checkBrowser();
        this.checkRequiredTables();

        const storageTable = this.getTable(table);

        console.log('storageTable', storageTable);

        storageTable[key] = value;

        console.log('storageTable', storageTable);

        localStorage.setItem(table, JSON.stringify(storageTable));
    }

    getItem = <T>(table: string, key: string): T | null => {
        this.checkBrowser();

        const parsedStorageTable = this.getTable(table);

        if (parsedStorageTable[key] === undefined) {
            return null;
        }

        return parsedStorageTable[key] as T;
    }

    deleteItem = (table: string, key: string): void => {
        this.checkBrowser();

        const storageTable = this.getTable(table);

        delete storageTable[key];

        localStorage.setItem(table, JSON.stringify(storageTable));
    }

    listItems = (table: string): IEntityCharacter[] => {
        return Object.values(this.getTable(table)).map(value => value as IEntityCharacter);
    }
}