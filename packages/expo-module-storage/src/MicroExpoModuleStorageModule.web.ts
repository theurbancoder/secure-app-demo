import { registerWebModule, NativeModule } from 'expo';

import { MicroExpoModuleStorageModuleEvents } from './MicroExpoModuleStorage.types';

class MicroExpoModuleStorageModule extends NativeModule<MicroExpoModuleStorageModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MicroExpoModuleStorageModule, 'MicroExpoModuleStorageModule');
