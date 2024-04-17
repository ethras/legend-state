import { configureLegendState, internal, type NodeValue } from '@cinformatique/state';

export function enableDirectAccess() {
    const { observableFns, set } = internal;
    configureLegendState({
        observableProperties: {
            $: {
                get(node) {
                    // Get it from the observableFns Map because another config function
                    // might have overriden get
                    const get = observableFns.get('get') as (node: NodeValue) => any;
                    return get(node);
                },
                set(node, value) {
                    return set(node, value);
                },
            },
        },
    });
}

// Types:

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ObservableBaseFns } from '@cinformatique/state';

declare module '@cinformatique/state' {
    interface ObservableBaseFns<T> {
        set $(value: T | null | undefined);
        get $(): T;
    }
}
