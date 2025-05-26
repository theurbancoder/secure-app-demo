// Reexport the native module. On web, it will be resolved to MicroExpoModuleStorageModule.web.ts
// and on native platforms to MicroExpoModuleStorageModule.ts
export { default } from './MicroExpoModuleStorageModule';
export { default as MicroExpoModuleStorageView } from './MicroExpoModuleStorageView';
export * from  './MicroExpoModuleStorage.types';
