import React, { FC } from 'react';
import {
  Platform,
  processColor,
  ProcessedColorValue,
  requireNativeComponent,
  StyleSheet,
  ViewProps,
  View,
} from 'react-native';

/**
 * Composes `View`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */
type ShadowProps =
  | {
      shadowColor?: ProcessedColorValue | null | undefined;
      shadowOffset?: {
        width?: number;
        height?: number;
      };
      shadowOpacity?: number;
      shadowRadius?: number;
    }
  | undefined;

const ShadowComponent = requireNativeComponent<
  {
    shadowProps: ShadowProps;
  } & ViewProps
>('ShadowViewNative');

type Props = ViewProps;

export const ShadowView: FC<Props> = ({ children, style, ...otherProps }) => {
  if (Platform.OS !== 'android') {
    return (
      <View {...otherProps} style={style}>
        {children}
      </View>
    );
  }
  const flattenStyles = StyleSheet.flatten(style);
  const shadowStyle: ShadowProps = {
    shadowColor: processColor(flattenStyles.shadowColor),
    shadowOffset: flattenStyles.shadowOffset,
    shadowOpacity: flattenStyles.shadowOpacity,
    shadowRadius: flattenStyles.shadowRadius,
  };
  return (
    <ShadowComponent {...otherProps} shadowProps={shadowStyle} style={style}>
      {children}
    </ShadowComponent>
  );
};
