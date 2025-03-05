# Isomorphic Web Audio API

Provide an isomorphic re-export of the [Web Audio API](https://webaudio.github.io/web-audio-api/)

This package aims at helping library authors to create components that can run seamlessly in Node.js and the browser.

Uses:
- [node-web-audio-api](https://github.com/ircam-ismm/node-web-audio-api/) in Node.js
- Native implementations in the browsers

## Usage

```sh
npm install isomorphic-web-audio-api
```

```js
import { AudioContext, OscillatorNode, GainNode } from 'isomorphic-web-audio-api';
const audioContext = new AudioContext();
// This must be called on a user gesture in browsers
// await audioContext.resume();

setInterval(() => {
  const now = audioContext.currentTime;
  const frequency = 200 + Math.random() * 2800;

  const env = new GainNode(audioContext, { gain: 0 });
  env.connect(audioContext.destination);
  env.gain
    .setValueAtTime(0, now)
    .linearRampToValueAtTime(0.2, now + 0.02)
    .exponentialRampToValueAtTime(0.0001, now + 1);

  const osc = new OscillatorNode(audioContext, { frequency });
  osc.connect(env);
  osc.start(now);
  osc.stop(now + 1);
}, 80);
```

## Caveats

- `AudioRenderCapacityEvent` and `AudioRenderCapacity` are only available on Node.js
- On node the `AudioContext` is automatically resumed at construction, make sure to call
`audioContext.resume()` on a user gesture in browsers
- Some small inconsistencies might still appear between the different implementations

Make sure to test your code everywhere!

## License

[BSD-3-Clause](./LICENSE)
