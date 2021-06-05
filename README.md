# react-instagram-feed

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

React component embedding users Instagram feed

```bash
yarn add react-instagram-feed

# or

npm i react-instagram-feed
```

[Live demo](https://react-instagram-feed.vercel.app/)

## Usage

```tsx
import Feed from "react-instagram-feed";

<Feed
  userName="javascript.js"
  limit={8}
  clientAccessToken="123|456"
  maxWidth={320}
  maxContainerHeight={510}
  hideCaption={false}
  protocol=""
  injectScript={true}
/>;
```

Access token is combination of App Id and Client Token. See https://developers.facebook.com/docs/instagram/oembed/#access-tokens for more details.

## props

- `userName` {String} Instagram User Name. Required
- `clientAccessToken` {String} Instagram Client Access Token. Required
- `maxWidth` {Number} Max width. Minimum size is `320`. Default `undefined`
- `maxContainerHeight` {Number} Max continer height. Default `510`
- `limit` {Number} Max limit. Maximum size is `12`. Default `12`
- `hideCaption` {Boolean} Default `false`
- `protocol` {String} Instagram API script protocol. Default `''` same as current protocol
  - This property needed if you use device's file system, for example, Electron, Cordova apps
- `injectScript` {Boolean} Default `true`

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/react-instagram-feed-.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-instagram-feed
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/Hamaad-Siddiqui/react-instagram-feed/main/LICENSE?token=AO7BLXAGHQMSSCNPKWKFFM3AXM6SI
