# Expo IDnow Auto Ident Plugin

This is a plugin for integrating IDnow's Auto Ident SDK into an Expo application.

**Warning:** This is NOT an official package from IDnow. It was tested with Expo SDK 53 and RN 0.79.

For more information about the IDnow Auto Ident SDK, please refer to the official documentation:
- [IDnow Android SDK](https://github.com/idnow/de.idnow.android.sdk?tab=readme-ov-file)
- [IDnow iOS SDK](https://github.com/idnow/de.idnow.ios.sdk.spm?tab=readme-ov-file)

## Installation

```bash
npm install expo-rn-idnow-auto-ident
```

### Configure with Expo

The Expo plugin will manage the permissions and other configuration for you.
Just add the plugin to your `app.json` or `app.config.js`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-rn-idnow-auto-ident",
        {
          "cameraPermission": "We need access to the camera to verify your identity.",
          "galleryPermission": "We need access to the photo library to upload identification documents.",
          "androidMediaProjection": true
        }
      ]
    ]
  }
}
```
The plugin supports the following options:
| Option                   | Type    | Required             | Description                                                          |
| ------------------------ | ------- | -------------------- | -------------------------------------------------------------------- |
| `cameraPermission`       | string  | No                   | Custom message for `NSCameraUsageDescription` on iOS.                |
| `galleryPermission`      | string  | No                   | Custom message for `NSPhotoLibraryUsageDescription` on iOS.          |
| `androidMediaProjection` | boolean | No (default: `true`) | Whether to request `android.permission.MEDIA_PROJECTION` on Android. |

### Configure with Bare Workflow

- On Android, add the permissions to your `AndroidManifest.xml` as stated [here](https://github.com/idnow/de.idnow.android.sdk?tab=readme-ov-file#android-manifest). Include the maven repository in your `build.gradle` as stated [here](https://github.com/idnow/de.idnow.android.sdk?tab=readme-ov-file#integration).
- On iOS, add the required permissions to your `Info.plist` as stated [here](https://github.com/idnow/de.idnow.ios.sdk.spm?tab=readme-ov-file#using-the-sdk-and-run-your-project).


## Usage

```typescript
import ExpoIdNowAutoIdent from 'expo-rn-idnow-auto-ident';

const token = 'xxx-xxxxx';
const language: string | undefined = 'en';
ExpoIdNowAutoIdent.startIdentification(token, language)
  .then((result) => {
    console.log('Identification result:', result);
  })
  .catch((error) => {
    console.error('Identification error:', error);
  });
```
The `startIdentification` method resolves with an object containing the identification result:
```typescript
export type IdentificationResult = {
  type: 'finished';
} | {
  type: 'error';
  /** @see https://github.com/idnow/de.idnow.ios.sdk.spm?tab=readme-ov-file#sdk-error-codes */
  errorCode: string;
};
```

Check the [Example app](/example/) for a complete implementation.

## Uploading to Play Store
If you plan to upload your app to the Play Store, you need to update your App Declaration, as the SDK uses the `android.permission.FOREGROUND_SERVICE` permission.
Read more about it in the [official documentation](https://github.com/idnow/de.idnow.android.sdk?tab=readme-ov-file#foreground_service_media_projection).