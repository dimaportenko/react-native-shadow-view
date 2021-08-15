import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ShadowView } from 'react-native-shadow-view';

export default function App() {
  return (
    <View style={styles.container}>
      <ShadowView style={[styles.box, styles.shadow]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    backgroundColor: 'green',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },
});
