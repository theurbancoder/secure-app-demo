import { NativeModule, requireNativeModule } from 'expo';

import { MicroExpoModuleNetworkingModuleEvents } from './MicroExpoModuleNetworking.types';

declare class MicroExpoModuleNetworkingModule extends NativeModule<MicroExpoModuleNetworkingModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MicroExpoModuleNetworkingModule>('MicroExpoModuleNetworking');
