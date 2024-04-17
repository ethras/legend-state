import { isFunction, observable, Observable } from '@cinformatique/state';
import { useMemo } from 'react';

/**
 * A React hook that creates a new observable
 *
 * @param initialValue The initial value of the observable or a function that returns the initial value
 *
 * @see https://legendapp.com/open-source/state/react/react-api/#useobservable
 */
export function useObservable<T>(initialValue?: T | (() => T) | (() => Promise<T>)): Observable<T> {
    // Create the observable from the default value
    return useMemo(() => observable<T>((isFunction(initialValue) ? initialValue() : initialValue) as T), []);
}
