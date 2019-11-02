"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowGeneButtonFragmentContainer = exports.FollowGeneButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _extend2 = _interopRequireDefault(require("lodash/extend"));

var Artsy = _interopRequireWildcard(require("../../Artsy"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _ButtonDeprecated = require("./ButtonDeprecated");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FollowGeneButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowGeneButton, _React$Component);

  function FollowGeneButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowGeneButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowGeneButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "trackFollow", function () {
      var _this$props = _this.props,
          tracking = _this$props.tracking,
          is_followed = _this$props.gene.is_followed;
      var trackingData = _this.props.trackingData || {};
      var action = is_followed ? "Unfollowed Gene" : "Followed Gene";
      tracking.trackEvent((0, _extend2.default)({
        action: action
      }, trackingData));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFollow", function () {
      var _this$props2 = _this.props,
          gene = _this$props2.gene,
          user = _this$props2.user,
          relay = _this$props2.relay,
          onOpenAuthModal = _this$props2.onOpenAuthModal;

      if (user && user.id) {
        (0, _reactRelay.commitMutation)(relay.environment, {
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../../__generated__/FollowGeneButtonMutation.graphql");

            if (node.hash && node.hash !== "db00447f1c033c153937a7380efcbc6b") {
              console.error("The definition of 'FollowGeneButtonMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../__generated__/FollowGeneButtonMutation.graphql");
          }),
          variables: {
            input: {
              gene_id: gene.id
            }
          },
          optimisticResponse: {
            followGene: {
              gene: {
                __id: gene.__id,
                is_followed: !gene.is_followed
              }
            }
          }
        });

        _this.trackFollow();
      } else {
        onOpenAuthModal && onOpenAuthModal("register", {
          contextModule: "intext tooltip",
          intent: "follow gene",
          copy: "Sign up to follow categories"
        });
      }
    });

    return _this;
  }

  _createClass(FollowGeneButton, [{
    key: "render",
    value: function render() {
      var gene = this.props.gene;
      return _react.default.createElement(_ButtonDeprecated.FollowButtonDeprecated, {
        isFollowed: gene && gene.is_followed,
        handleFollow: this.handleFollow
      });
    }
  }]);

  return FollowGeneButton;
}(_react.default.Component);

exports.FollowGeneButton = FollowGeneButton;
var FollowGeneButtonFragmentContainer = (0, _reactTracking.default)({})((0, _reactRelay.createFragmentContainer)(Artsy.withSystemContext(FollowGeneButton), {
  gene: function gene() {
    var node = require("../../__generated__/FollowGeneButton_gene.graphql");

    if (node.hash && node.hash !== "56411a7fc651d6c3a3e5ab27b241b1c0") {
      console.error("The definition of 'FollowGeneButton_gene' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/FollowGeneButton_gene.graphql");
  }
}));
exports.FollowGeneButtonFragmentContainer = FollowGeneButtonFragmentContainer;
//# sourceMappingURL=FollowGeneButton.js.map