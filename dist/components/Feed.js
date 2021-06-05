"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Instagram = _interopRequireDefault(require("./../lib/Instagram"));

var _reactInstagramEmbed = _interopRequireDefault(require("react-instagram-embed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Feed = /*#__PURE__*/function (_Component) {
  _inherits(Feed, _Component);

  var _super = _createSuper(Feed);

  function Feed(props) {
    var _this;

    _classCallCheck(this, Feed);

    _this = _super.call(this, props);
    _this.state = {
      media: []
    };
    return _this;
  }

  _createClass(Feed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getFeedFn(this.props.userName).then(function (media) {
        return _this2.setState({
          loading: false,
          media: media.slice(0, _this2.props.limit)
        });
      })["catch"](function (error) {
        return _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.userName === undefined) return /*#__PURE__*/_react["default"].createElement("h4", null, "username is undefined");
      if (this.props.clientAccessToken === undefined) return /*#__PURE__*/_react["default"].createElement("h4", null, "clientAccessToken is undefined");
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          overflowY: "auto",
          margin: "auto",
          padding: "1%",
          minWidth: "380px",
          maxHeight: "".concat(this.props.maxContainerHeight, "px"),
          maxWidth: "".concat(this.props.maxWidth + 60, "px")
        }
      }, this.state.media.map(function (media, index) {
        return /*#__PURE__*/_react["default"].createElement(_reactInstagramEmbed["default"], {
          alt: media.alt,
          key: index,
          url: media.url,
          clientAccessToken: _this3.props.clientAccessToken,
          maxWidth: _this3.props.width,
          hideCaption: _this3.props.hideCaption,
          containerTagName: "div",
          protocol: _this3.props.protocol,
          injectScript: _this3.props.injectScript // onLoading={() => {}} // * Maybe Later
          // onSuccess={() => {}}
          // onAfterRender={() => {}}
          // onFailure={() => {}}

        });
      }));
    }
  }]);

  return Feed;
}(_react.Component);

_defineProperty(Feed, "defaultProps", {
  getFeedFn: _Instagram["default"].getFeed,
  limit: 12,
  hideCaption: false,
  maxWidth: "",
  protocol: "",
  maxContainerHeight: 510,
  injectScript: true
});

var _default = Feed;
exports["default"] = _default;