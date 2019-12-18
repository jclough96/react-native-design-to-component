# React Native Design To Component

This package is design for developers to aid them in turning fixed dimension designs into scalable React Native components for use on changing resolutions.

## Getting Started

Set your configuration option for the dimensions of the design you are working from. For example: If the design is built for an iPhone 8 I would use the iPhone 8's dimensions as:
```
// Config.js

const config = {
    width: 375,
    height: 667
}

// In the return block of your app.js pass this config to the ScaleProvider component

return (
    <ScaleProvider config={config}>
        // ...Your app components
        <App />
    </ScaleProvider>
)
```

## Using The Hooks

```
import {ScaleHook} from 'react-native-design-to-component';

// ... Further imports

function() {

    const { height, width, fontSize } = ScaleHook();

    const style = {
        container: {
            height,
            width,
        },
        text: {
            fontSize
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Hello</Text>
        </View>
    )

}
```

