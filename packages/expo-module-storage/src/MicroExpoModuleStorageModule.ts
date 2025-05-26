import { NativeModule, requireNativeModule } from 'expo';

import { MicroExpoModuleStorageModuleEvents } from './MicroExpoModuleStorage.types';

declare class MicroExpoModuleStorageModule extends NativeModule<MicroExpoModuleStorageModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MicroExpoModuleStorageModule>('MicroExpoModuleStorage');
