function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Snowflake = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.0661 4L12 5L9.93391 4M12 15V22M9.93391 20L12 19L14.0661 20M20.967 7.04L14.686 10.51C13.9732 10.9 14.0661 12 14.0661 12C14.0661 13.1 13.1364 14 12 14C10.8637 14 9.93391 13.1 9.93391 12C9.93391 11.21 10.3988 10.53 11.0806 10.21C11.0806 10.21 12 9.81 12 9V2M20.2025 9.77L18.281 8.53L18.157 6.29M9.31407 13.49L3.03308 16.96M3.79754 14.23L5.71903 15.47L5.85333 17.71M9.31407 10.51L3.03308 7.04M3.79754 9.77L5.71903 8.53L5.85333 6.29M14.0661 13.49L20.3471 16.96M19.5827 14.23L17.6612 15.47L17.5269 17.71",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Snowflake);