import type { ObservablePersistenceConfig } from '@cinformatique/state';

export const observablePersistConfiguration: ObservablePersistenceConfig = {};

export function configureObservablePersistence(options?: ObservablePersistenceConfig) {
    Object.assign(observablePersistConfiguration, options);
}
