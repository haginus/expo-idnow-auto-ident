import { AndroidConfig, ConfigPlugin, IOSConfig } from "expo/config-plugins";
import { PermissionsConfigOptions } from "./types";

const CAMERA_USAGE = 'Allow $(PRODUCT_NAME) to access your camera';
const GALLERY_USAGE = 'Allow $(PRODUCT_NAME) to access your photo library';

const withPermissions: ConfigPlugin<PermissionsConfigOptions> = (config, { cameraPermission, galleryPermission, androidMediaProjection = true } = {}) => {
  IOSConfig.Permissions.createPermissionsPlugin({
    NSCameraUsageDescription: CAMERA_USAGE,
    NSPhotoLibraryUsageDescription: GALLERY_USAGE,
  })(config, {
    NSCameraUsageDescription: cameraPermission,
    NSPhotoLibraryUsageDescription: galleryPermission,
  });
  config = AndroidConfig.Permissions.withPermissions(
    config,
    [
      'android.permission.CAMERA',
      'android.permission.FLASHLIGHT',
      'android.permission.ACCESS_NETWORK_STATE',
      'android.permission.NFC',
      'android.permission.FOREGROUND_SERVICE',
      'android.permission.POST_NOTIFICATIONS',
      androidMediaProjection && 'android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION',
    ].filter(Boolean) as string[]
  );
  return config;
}

export default withPermissions;