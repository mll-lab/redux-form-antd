function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React, { PureComponent } from "react";
import FormItem from "antd/lib/form/FormItem";
export function createComponent(AntdComponent, mapProps) {
  var InputComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(InputComponent, _PureComponent);

    var _super = _createSuper(InputComponent);

    function InputComponent(p) {
      var _this;

      _classCallCheck(this, InputComponent);

      _this = _super.call(this, p);
      _this.getRenderedComponent = _this.getRenderedComponent.bind(_assertThisInitialized(_this));
      _this.initComponentRef = _this.initComponentRef.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(InputComponent, [{
      key: "getRenderedComponent",
      value: function getRenderedComponent() {
        return this.componentRef;
      }
    }, {
      key: "initComponentRef",
      value: function initComponentRef(r) {
        this.componentRef = r;
      }
    }, {
      key: "render",
      value: function render() {
        var _mapProps = mapProps(this.props),
            label = _mapProps.label,
            labelCol = _mapProps.labelCol,
            wrapperCol = _mapProps.wrapperCol,
            help = _mapProps.help,
            extra = _mapProps.extra,
            validateStatus = _mapProps.validateStatus,
            _mapProps$hasFeedback = _mapProps.hasFeedback,
            hasFeedback = _mapProps$hasFeedback === void 0 ? true : _mapProps$hasFeedback,
            colon = _mapProps.colon,
            required = _mapProps.required,
            rest = _objectWithoutProperties(_mapProps, ["label", "labelCol", "wrapperCol", "help", "extra", "validateStatus", "hasFeedback", "colon", "required"]);

        return /*#__PURE__*/React.createElement(FormItem, {
          label: label,
          ref: this.initComponentRef,
          wrapperCol: wrapperCol,
          labelCol: labelCol,
          help: help,
          hasFeedback: hasFeedback,
          extra: extra,
          validateStatus: validateStatus,
          colon: colon,
          required: required
        }, /*#__PURE__*/React.createElement(AntdComponent, rest));
      }
    }]);

    return InputComponent;
  }(PureComponent);

  InputComponent.displayName = "Redux-form-ANTD".concat(AntdComponent.displayName);
  return InputComponent;
}