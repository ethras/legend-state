import type { ObservableReadable } from '@cinformatique/state';
import { ReactNode } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Computed, Memo } from '@cinformatique/state/react';
declare module '@cinformatique/state/react' {
    export declare const Computed: (props: {
        children: ObservableReadable | (() => ReactNode) | ReactNode;
    }) => React.ReactElement;
    export declare const Memo: (props: {
        children: ObservableReadable | (() => ReactNode) | ReactNode;
    }) => React.ReactElement;
}
