import { ChoiceFieldConfig } from './ChoiceFieldConfig';

export class SelectFieldConfig extends ChoiceFieldConfig {

    constructor(name: string, label: string, isRequired: boolean, options: Array<string>, defaultOptionIndex: number) {
        super(name, label, isRequired, options, defaultOptionIndex);
    }
}