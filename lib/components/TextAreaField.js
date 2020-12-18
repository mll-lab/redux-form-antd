"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input = _interopRequireDefault(require("antd/lib/input"));

var _textFieldMap = _interopRequireDefault(require("../maps/textFieldMap"));

var _createComponent = _interopRequireDefault(require("./createComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextArea = _input["default"].TextArea;

var _default = (0, _createComponent["default"])(TextArea, _textFieldMap["default"]);

exports["default"] = _default;