import { requireNativeView } from 'expo';
import * as React from 'react';

import { MicroExpoModuleStorageViewProps } from './MicroExpoModuleStorage.types';

const NativeView: React.ComponentType<MicroExpoModuleStorageViewProps> =
  requireNativeView('MicroExpoModuleStorage');

export default function MicroExpoModuleStorageView(props: MicroExpoModuleStorageViewProps) {
  return <NativeView {...props} />;
}
