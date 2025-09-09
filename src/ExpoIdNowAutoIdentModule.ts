import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoIdNowAutoIdentModule extends NativeModule {
  startIdentification(token: string): any;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIdNowAutoIdentModule>('ExpoIdNowAutoIdent');
