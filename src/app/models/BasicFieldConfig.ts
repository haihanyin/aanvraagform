export class BasicFieldConfig {
    private _name: string;
    private _label: string;
    private _isRequired: boolean;
    private _infoText: string = "";
    private _helpText: string = "";

    constructor(name: string, label: string, isRequired: boolean) {
        this._name = name;
        this._label = label;
        this._isRequired = isRequired;
    }

    withInfoText(text: string): BasicFieldConfig {
        this._infoText = text.trim();
        return this;
    }

    withHelpText(text: string): BasicFieldConfig {
        this._helpText = text.trim();
        return this;
    }

    get name(): string {
        return this._name;
    }

    get label(): string {
        return this._label;
    }

    get isRequired(): boolean {
        return this._isRequired;
    }

    get infoText(): string {
        return this._infoText;
    }

    get helpText(): string {
        return this._helpText;
    }

    hasInfoText(): boolean {
        return this._infoText.length > 0;
    }

    hasHelpText(): boolean {
        return this._helpText.length > 0;
    }

}