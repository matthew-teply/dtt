import type { TDrivers } from '../types';
import { DriverLocalStorageCharacter } from './DriverLocalStorageCharacter';
import { DriverLocalStorageCompany } from './DriverLocalStorageCompany';

export const drivers: TDrivers = {
    charachter: new DriverLocalStorageCharacter(),
    company: new DriverLocalStorageCompany(),
}