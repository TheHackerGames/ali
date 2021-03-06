'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoot = function (_Component) {
  _inherits(AppRoot, _Component);

  function AppRoot() {
    _classCallCheck(this, AppRoot);

    return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
  }

  _createClass(AppRoot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'wrapper' },
        _react2.default.createElement(
          'main',
          { className: 'mdl-layout__content' },
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransitionGroup,
            {
              transitionName: 'fade',
              transitionAppear: true,
              transitionAppearTimeout: 500,
              transitionEnterTimeout: 500,
              transitionLeaveTimeout: 300 },
            _react2.default.createElement(
              'div',
              null,
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return AppRoot;
}(_react.Component);

exports.default = AppRoot;