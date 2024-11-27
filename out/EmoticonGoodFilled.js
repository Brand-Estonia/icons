function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonGoodFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  fill: "#000"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.28467 15C7.97106 16.942 9.82313 18.3333 12.0002 18.3333C14.1772 18.3333 16.0293 16.942 16.7156 15M8 10V8M16 10V8",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round"
}));
module.exports = forwardRef(EmoticonGoodFilled);