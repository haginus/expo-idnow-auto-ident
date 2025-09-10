export type PermissionsConfigOptions = {
  /** NSCameraUsageDescription */
  cameraPermission?: string;
  /** NSPhotoLibraryUsageDescription */
  galleryPermission?: string;
  androidMediaProjection?: boolean;
} | void;

export type PluginConfigOptions = PermissionsConfigOptions;