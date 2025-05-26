import { registerWebModule, NativeModule } from 'expo';

import { MicroExpoModuleNetworkingModuleEvents } from './MicroExpoModuleNetworking.types';

class MicroExpoModuleNetworkingModule extends NativeModule<MicroExpoModuleNetworkingModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MicroExpoModuleNetworkingModule, 'MicroExpoModuleNetworkingModule');
