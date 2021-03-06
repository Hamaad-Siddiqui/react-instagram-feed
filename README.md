# React-Instagram-Feed

[![GitHub package.json version][npm-image]][npm-url]
[![License][license-image]][license-url]

React component embedding users Instagram feed

```bash
yarn add @hamaad/react-instagram-feed

# or

npm i @hamaad/react-instagram-feed
```

## Screenshots

<img src="docs/screenshot.png" width="320" alt="screenshot">

[Live demo](https://react-instagram-feed.vercel.app/)

## Usage

```tsx
import Feed from "@hamaad/react-instagram-feed";

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

### Errors

If you dont see anything check the Console/Network tab, it usually something wrong with the token...

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

[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/Hamaad-Siddiqui/react-instagram-feed/main/LICENSE
[npm-url]: https://www.npmjs.com/package/@hamaad/react-instagram-feed
[npm-image]: https://img.shields.io/github/package-json/v/hamaad-siddiqui/react-instagram-feed
