import { requireNativeComponent, ViewStyle } from 'react-native';

type ShadowViewProps = {
  color: string;
  style: ViewStyle;
};

export const ShadowViewViewManager =
  requireNativeComponent<ShadowViewProps>('ShadowViewView');

export default ShadowViewViewManager;
