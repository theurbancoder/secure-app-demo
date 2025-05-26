import { NativeModule, requireNativeModule } from "expo";

import { SecureCoreModuleEvents } from "./SecureCore.types";

declare class SecureCoreModule extends NativeModule<SecureCoreModuleEvents> {
  isAuthenticated: boolean;
  authenticate(): Promise<boolean>;
}

export default requireNativeModule<SecureCoreModule>("SecureCore");
