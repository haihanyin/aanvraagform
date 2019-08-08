import { BasicFieldConfig } from './BasicFieldConfig';

export class InputFieldConfig extends BasicFieldConfig {

    constructor(name: string, label: string, isRequired: boolean) {
        super(name, label, isRequired);
    }
}