import { registerWebModule, NativeModule } from 'expo';

import { ExpoIdNowAutoIdentModuleEvents } from './ExpoIdNowAutoIdent.types';

class ExpoIdNowAutoIdentModule extends NativeModule<ExpoIdNowAutoIdentModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoIdNowAutoIdentModule, 'ExpoIdNowAutoIdentModule');
