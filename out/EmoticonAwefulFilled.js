function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonAwefulFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 11,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10L6 8M14 10L18 8M8 12V10M16 12V10M8 18C8.86287 16.794 10.3323 16 12 16C13.6677 16 15.1371 16.794 16 18",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round"
}));
module.exports = forwardRef(EmoticonAwefulFilled);