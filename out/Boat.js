function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Boat = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 11V5H15V2H9V5M6 8.1V5H12M20.51 14.91L21 12L12 9L3 12L4 18C4 18 7 17 8 15C8 15 9 18 12 18C15 18 16 15 16 15C17 17 20 18 20 18M2 22C6 22 7.62 20 7.62 20C7.62 20 9 22 12 22C15 22 16.38 20 16.38 20C16.38 20 18 22 22 22",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Boat);