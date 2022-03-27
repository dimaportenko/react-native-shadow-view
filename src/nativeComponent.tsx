import { requireNativeComponent, ViewProps } from 'react-native';
import type { ShadowProps } from './index';

const ShadowComponent = requireNativeComponent<
  {
    shadowProps: ShadowProps;
  } & ViewProps
>('ShadowViewNative');

export default ShadowComponent;
