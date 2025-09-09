import * as React from 'react';

import { ExpoIdNowAutoIdentViewProps } from './ExpoIdNowAutoIdent.types';

export default function ExpoIdNowAutoIdentView(props: ExpoIdNowAutoIdentViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
