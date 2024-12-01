import type { IDriverCompany } from '$lib/drivers';
import type { IEntityCompany } from '$lib/entities/company/IEntityCompany';

export class DatabaseCompany {
    private driver: IDriverCompany;

    constructor(driver: IDriverCompany) {
        this.driver = driver;
    }

    set = (company: IEntityCompany) => {
        this.driver.set(company);
    }

    get = (companyId: string) => {
        return this.driver.get(companyId);
    }

    update = (company: IEntityCompany, companyId: string) => {
        this.driver.update(company, companyId);
    }

    delete = (companyId: string) => {
        this.driver.delete(companyId);
    }
}