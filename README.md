# react-native-shadow-view

React Native library with Android native view which supports same shadows styles as iOS

## Installation

```sh
npm install @dimaportenko/react-native-shadow-view
```

## Usage

```js
import { ShadowView } from '@dimaportenko/react-native-shadow-view';

// ...

<ShadowView style={[styles.box, styles.shadow]} />

// ...
const styles = StyleSheet.create({
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
