import { configureLegendState, internal, NodeValue } from '@cinformatique/state';
import { useSelector, UseSelectorOptions } from '@cinformatique/state/react';

export function enableReactUse() {
    configureLegendState({
        observableFunctions: {
            use: (node: NodeValue, options?: UseSelectorOptions) => useSelector(internal.getProxy(node), options),
        },
    });
}

// Types:

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ObservableBaseFns } from '@cinformatique/state';

declare module '@cinformatique/state' {
    interface ObservableBaseFns<T> {
        use(options?: UseSelectorOptions): T;
    }
}
