import { BasicFieldConfig } from './BasicFieldConfig';

export class DateFieldConfig extends BasicFieldConfig {
    constructor(name: string, label: string, isRequired: boolean) {
        super(name, label, isRequired);
    }
}