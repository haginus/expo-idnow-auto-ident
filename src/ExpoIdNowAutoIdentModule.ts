import { NativeModule, requireNativeModule } from 'expo';
import { IdentificationResult, LanguageCode } from './ExpoIdNowAutoIdent.types';

declare class ExpoIdNowAutoIdentModule extends NativeModule {
  startIdentification(token: string, preferredLanguage?: LanguageCode): Promise<IdentificationResult>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIdNowAutoIdentModule>('ExpoIdNowAutoIdent');
