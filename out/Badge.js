function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Badge = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.85 5.43L20.81 5.78L20.31 9.32L22.8 11.89L20.31 14.46L20.81 18L17.29 18.62L15.61 21.78L13.44 20.72L12.4 20.21L9.19 21.78L7.51 18.62L3.99 18L4.49 14.46L2 11.89L4.49 9.32L3.99 5.78L7.51 5.16L9.19 2L12.4 3.57L15.61 2L16.46 3.6M8.4 11.89L11.4 14.89L16.4 8.89",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Badge);