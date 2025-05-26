// Reexport the native module. On web, it will be resolved to MicroExpoModuleSecureCoreModule.web.ts
// and on native platforms to MicroExpoModuleSecureCoreModule.ts
export { default } from './src/MicroExpoModuleSecureCoreModule';
export { default as MicroExpoModuleSecureCoreView } from './src/MicroExpoModuleSecureCoreView';
export * from  './src/MicroExpoModuleSecureCore.types';
