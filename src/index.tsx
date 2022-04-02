import React, { FC } from 'react';
import {
  Platform,
  processColor,
  ProcessedColorValue,
  StyleSheet,
  ViewProps,
  View,
} from 'react-native';
import ShadowComponent from './nativeComponent';

/**
 * Composes `View`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 */
export type ShadowProps =
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

  if (
    flattenStyles.borderRadius ||
    flattenStyles.borderBottomRightRadius ||
    flattenStyles.borderBottomLeftRadius ||
    flattenStyles.borderTopLeftRadius ||
    flattenStyles.borderTopRightRadius
  ) {
    return (
      <ShadowComponent
        {...otherProps}
        shadowProps={shadowStyle}
        style={[style, styles.transparent]}
      >
        <View {...otherProps} style={style}>
          {children}
        </View>
      </ShadowComponent>
    );
  }

  return (
    <ShadowComponent {...otherProps} shadowProps={shadowStyle} style={style}>
      {children}
    </ShadowComponent>
  );
};

const styles = StyleSheet.create({
  transparent: { backgroundColor: 'transparent' },
});
