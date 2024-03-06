import { StateProperty } from "./state-property";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export class StateManagement {

    public static load<T>(stateProp: StateProperty<T>, req:  Observable<T>): void {
        req.pipe(take(1)).subscribe({
            next: res => {
                stateProp.setValue(res)
                stateProp.setError(null);
            },
            error: error => {
                stateProp.setValue(null)
                stateProp.setError({ code: 0, msg: error.msg });
            },
            complete: () => stateProp.setIsLoading(false)
        });
    }

}