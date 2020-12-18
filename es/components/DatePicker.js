function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import { customMap } from "../maps/mapError";
import createComponent from "./BaseComponent";
var MonthPicker = DatePicker.MonthPicker;

var valueToMoment = function valueToMoment(value, dateFormat) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return moment(value, dateFormat);
};

var datePickerMap = customMap(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      dateFormat = _ref.dateFormat;
  return _objectSpread(_objectSpread({}, mapProps), {}, {
    onChange: function onChange(e, v) {
      return _onChange(v);
    },
    value: valueToMoment(value, dateFormat),
    format: dateFormat
  });
}); // datepicker has some problems with formatting, while this component doesn't have such problems

var datePickerMapRU = customMap(function (mapProps, _ref2) {
  var _ref2$input = _ref2.input,
      _onChange2 = _ref2$input.onChange,
      value = _ref2$input.value,
      displayFormat = _ref2.displayFormat,
      valueFormat = _ref2.valueFormat;
  return _objectSpread(_objectSpread({}, mapProps), {}, {
    onChange: function onChange(e, v) {
      _onChange2(e.format(valueFormat));
    },
    value: valueToMoment(value),
    format: displayFormat
  });
});
export var DatePickerFieldRU = createComponent(DatePicker, datePickerMapRU);
export var DatePickerField = createComponent(DatePicker, datePickerMap);
export var MonthPickerField = createComponent(MonthPicker, datePickerMap);