import { BasicFieldConfig } from './BasicFieldConfig';

export class CheckFieldConfig extends BasicFieldConfig {
    private _isCheckedByDefault: boolean;

    constructor(name: string, label: string, isRequired: boolean, isCheckedByDefault: boolean) {
        super(name, label, isRequired);
        this._isCheckedByDefault = isCheckedByDefault;
    }

    get isCheckedByDefault(): boolean {
        return this._isCheckedByDefault;
    }
}