"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _eventMap = _interopRequireDefault(require("../maps/eventMap"));

var _withOptions = require("../withOptions");

var _createComponent = require("../createComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _createComponent.createComponent)(_withOptions.RadioField, _eventMap["default"]);

exports["default"] = _default;