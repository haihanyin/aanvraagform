import { ChoiceFieldConfig } from './ChoiceFieldConfig';

export class RadioFieldConfig extends ChoiceFieldConfig {

    constructor(name: string, label: string, isRequired: boolean, options: Array<string>, defaultOptionIndex: number) {
        super(name, label, isRequired, options, defaultOptionIndex);
    }
}