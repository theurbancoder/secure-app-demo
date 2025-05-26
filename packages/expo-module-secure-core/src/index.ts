import { SecoreCorePayload } from "./SecureCore.types";
import SecureCoreModule from "./SecureCoreModule";

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
