# React Native Design To Component

Designed for developers to development by helping transform fixed dimension designs into scalable React Native components for use on changing resolutions.

## Getting Started

Set your configuration option for the dimensions of the design you are working from. For example: If the design is for an iPhone 8 I would use the iPhone 8's dimensions as:

```
// Config.js

const config = {
    width: 375,
    height: 667
}

// App.js
import {ScaleProvider} from 'react-native-design-to-component';

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

    const { getHeight, getWidth, fontSize, radius } = ScaleHook();

    const style = {
        container: {
            height: getHeight(44),
            width: getWidth(280),
            borderRadius: radius(12)
        },
        text: {
            fontSize: fontSize(15)
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Hello</Text>
        </View>
    )

}
```

## Dependencies

We use `react-native-hooks` to get the dimensions of the target device.

Make sure you check out the `package.json`.

## ISC License

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
