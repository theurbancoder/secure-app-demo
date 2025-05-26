import { requireNativeView } from 'expo';
import * as React from 'react';

import { MicroExpoModuleNetworkingViewProps } from './MicroExpoModuleNetworking.types';

const NativeView: React.ComponentType<MicroExpoModuleNetworkingViewProps> =
  requireNativeView('MicroExpoModuleNetworking');

export default function MicroExpoModuleNetworkingView(props: MicroExpoModuleNetworkingViewProps) {
  return <NativeView {...props} />;
}
