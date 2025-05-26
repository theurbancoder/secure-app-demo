import { NativeModule, requireNativeModule } from "expo";

import { SecureCoreModuleEvents } from "./MicroExpoModuleAuthentication.types";

declare class SecureCoreModule extends NativeModule<SecureCoreModuleEvents> {
  isAuthenticated: boolean;
  authenticate(): Promise<boolean>;
}

export default requireNativeModule<SecureCoreModule>(
  "MicroExpoModuleAuthentication"
);
