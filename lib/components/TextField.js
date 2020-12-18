"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input = _interopRequireDefault(require("antd/lib/input"));

var _textFieldMap = _interopRequireDefault(require("../maps/textFieldMap"));

var _createComponent = require("./createComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _createComponent.createComponent)(_input["default"], _textFieldMap["default"]);

exports["default"] = _default;