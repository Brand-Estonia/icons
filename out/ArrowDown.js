function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const ArrowDown = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 2L12 16M19 15L12 22L5 15",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(ArrowDown);