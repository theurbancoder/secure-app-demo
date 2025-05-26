export * from "./MicroExpoModuleAuthentication.types";
import { SecoreCorePayload } from "./MicroExpoModuleAuthentication.types";
import SecureCoreModule from "./MicroExpoModuleAuthenticationModule";

export function addAuthenticationListener(
  listener: (event: SecoreCorePayload) => void
) {
  return SecureCoreModule.addListener("onSecureCoreStateChange", listener);
}

export function authenticate() {
  return SecureCoreModule.authenticate();
}

export function getIsAuthenticated() {
  return SecureCoreModule.isAuthenticated;
}
