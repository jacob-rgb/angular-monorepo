import { signal } from "@angular/core"
import { StatePropertyError } from "./models/state-property-error.model";

export class StateProperty<Type> {

    private readonly _value = signal<Type | null>(null)
    private readonly _isLoading = signal<boolean>(false);
    private readonly _error = signal<StatePropertyError | null>(null);

    readonly $value = this._value.asReadonly();
    readonly $isLoading = this._isLoading.asReadonly(); 
    readonly $error = this._error.asReadonly(); 

    public setValue(value: Type | null) {
        this._value.set(value);
    }

    public setIsLoading(isLoading: boolean) {
        this._isLoading.set(isLoading);
    }

    public setError(error: StatePropertyError | null) {
        this._error.set(error);
    }

}