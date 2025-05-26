import { NativeModule, requireNativeModule } from "expo";

declare class StorageModule extends NativeModule {
  getValue(key: string): Promise<string>;
  setValue(key: string, value: string): Promise<void>;
  clearValue(key: string): Promise<void>;
}

export default requireNativeModule<StorageModule>("MicroExpoModuleStorage");
