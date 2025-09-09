import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoIdNowAutoIdentViewProps } from './ExpoIdNowAutoIdent.types';

const NativeView: React.ComponentType<ExpoIdNowAutoIdentViewProps> =
  requireNativeView('ExpoIdNowAutoIdent');

export default function ExpoIdNowAutoIdentView(props: ExpoIdNowAutoIdentViewProps) {
  return <NativeView {...props} />;
}
