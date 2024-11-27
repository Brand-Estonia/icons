function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonExcellentFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M17 14H7C7 16.7614 9.23858 19 12 19C13.6358 19 15.0882 18.2144 16.0004 17M8 10V8M16 10V8",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round"
}));
module.exports = forwardRef(EmoticonExcellentFilled);