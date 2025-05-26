import * as React from 'react';

import { MicroExpoModuleStorageViewProps } from './MicroExpoModuleStorage.types';

export default function MicroExpoModuleStorageView(props: MicroExpoModuleStorageViewProps) {
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
