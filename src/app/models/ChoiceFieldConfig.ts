import { BasicFieldConfig } from "./BasicFieldConfig";

export class ChoiceFieldConfig extends BasicFieldConfig {

    private _options : Array<string>;
    private _defaultOptionIndex : number;

    constructor(name: string, label: string, isRequired: boolean, options: Array<string>, defaultOptionIndex: number) {
        super(name, label, isRequired);
        this._options = options;
        this._defaultOptionIndex = defaultOptionIndex;
    }

    get defaultOptionIndex() : number {
        return this._defaultOptionIndex;
    }

    get options(): Array<string> {
        // todo: make a copy and return
        return this._options;
    }
}