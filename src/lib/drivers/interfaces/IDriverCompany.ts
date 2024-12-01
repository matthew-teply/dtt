import type { IEntityCompany } from '$lib/entities/company/IEntityCompany';

export interface IDriverCompany
{
    set: (company: IEntityCompany) => void;

    get: (companyId: string) => IEntityCompany;

    update: (company: IEntityCompany, companyId: string) => void;

    delete: (companyId: string) => void;
}