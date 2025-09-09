import { NativeModule, requireNativeModule } from 'expo';

import { ExpoIdNowAutoIdentModuleEvents } from './ExpoIdNowAutoIdent.types';

declare class ExpoIdNowAutoIdentModule extends NativeModule<ExpoIdNowAutoIdentModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIdNowAutoIdentModule>('ExpoIdNowAutoIdent');
