function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Water = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 17C4.5 17 4.5 16 6 16C7.5 16 7.5 17 9 17C10.5 17 10.5 16 12 16C13.5 16 13.5 17 15 17C16.5 17 16.5 16 18 16C19.5 16 19.5 17 21 17M3 13C4.5 13 4.5 12 6 12C7.5 12 7.5 13 9 13C10.5 13 10.5 12 12 12C13.5 12 13.5 13 15 13C16.5 13 16.5 12 18 12C19.5 12 19.5 13 21 13M3 9C4.5 9 4.5 8 6 8C7.5 8 7.5 9 9 9C10.5 9 10.5 8 12 8C13.5 8 13.5 9 15 9C16.5 9 16.5 8 18 8C19.5 8 19.5 9 21 9",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Water);