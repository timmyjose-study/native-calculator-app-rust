/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { TurboModule, TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
    readonly add: (x: number, y: number) => number;
    readonly sub: (x: number, y: number) => number;
    readonly mul: (x: number, y: number) => number;
    readonly div: (x: number, y: number) => number;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeCalculatorAppRust'
)
