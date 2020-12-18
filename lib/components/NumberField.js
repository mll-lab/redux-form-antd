"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _mapError = _interopRequireDefault(require("../maps/mapError"));

var _createComponent = _interopRequireDefault(require("./createComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _createComponent["default"])(_inputNumber["default"], _mapError["default"]);

exports["default"] = _default;