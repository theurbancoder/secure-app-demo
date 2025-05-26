import * as React from 'react';

import { MicroExpoModuleNetworkingViewProps } from './MicroExpoModuleNetworking.types';

export default function MicroExpoModuleNetworkingView(props: MicroExpoModuleNetworkingViewProps) {
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
