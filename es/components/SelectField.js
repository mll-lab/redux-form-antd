function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { customMap } from "../maps/mapError";
import createComponent from "./createComponent";
import { SelectField as Select } from "./MultiSelect";
var selectFieldMap = customMap(function (mapProps, _ref) {
  var _ref$input = _ref.input,
      _onChange = _ref$input.onChange,
      value = _ref$input.value,
      multiple = _ref.multiple,
      options = _ref.options,
      placeholder = _ref.placeholder;

  if (!placeholder && options && options.length > 0) {
    value = value ? value : multiple ? [options[0].value] : options[0].value;
  }

  if (placeholder) {
    value = value === "" ? undefined : value;
  }

  return _objectSpread(_objectSpread({}, mapProps), {}, {
    onChange: function onChange(value) {
      return value === undefined ? _onChange(null) : _onChange(value);
    },
    dropdownMatchSelectWidth: true,
    value: value
  });
});
export default createComponent(Select, selectFieldMap);