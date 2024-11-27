function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const WarningFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0.999999C5.92487 0.999999 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 0.999999ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6L11 12.5C11 13.0523 11.4477 13.5 12 13.5C12.5523 13.5 13 13.0523 13 12.5L13 6ZM13 16.5C13 15.9477 12.5523 15.5 12 15.5C11.4477 15.5 11 15.9477 11 16.5L11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18L13 16.5Z",
  fill: "#000"
}));
module.exports = forwardRef(WarningFilled);