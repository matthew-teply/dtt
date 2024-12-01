import type { IEntityCompany } from '$lib/entities';
import type { IDriverCompany } from '../interfaces';
import { LOCAL_STORAGE_TABLE_COMPANY } from './constants';
import { LocalStorage } from './LocalStorage';

export class DriverLocalStorageCompany extends LocalStorage implements IDriverCompany
{
    set = (company: IEntityCompany) => {
        this.setItem(LOCAL_STORAGE_TABLE_COMPANY, company.id, company);
    }

    get = (companyId: string): IEntityCompany => {
        return this.getItem(LOCAL_STORAGE_TABLE_COMPANY, companyId) as IEntityCompany;
    }

    update = (company: IEntityCompany, companyId: string) => {
        this.setItem(LOCAL_STORAGE_TABLE_COMPANY, companyId, company);
    }
    
    delete = (companyId: string) => {
        this.deleteItem(LOCAL_STORAGE_TABLE_COMPANY, companyId);
    }

    list = () => {
        return this.listItems(LOCAL_STORAGE_TABLE_COMPANY);
    }
}