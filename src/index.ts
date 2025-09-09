// Reexport the native module. On web, it will be resolved to ExpoIdNowAutoIdentModule.web.ts
// and on native platforms to ExpoIdNowAutoIdentModule.ts
export { default } from './ExpoIdNowAutoIdentModule';
export { default as ExpoIdNowAutoIdentView } from './ExpoIdNowAutoIdentView';
export * from  './ExpoIdNowAutoIdent.types';
