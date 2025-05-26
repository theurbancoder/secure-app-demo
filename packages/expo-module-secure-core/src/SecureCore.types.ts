export type SecureCoreModuleEvents = {
  onSecureCoreStateChange: (params: SecoreCorePayload) => void;
};

export type SecoreCorePayload = {
  isAuthenticated: boolean;
};
