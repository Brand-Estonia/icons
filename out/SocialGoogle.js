function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const SocialGoogle = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.64 21.65C18.88 20.49 22 16.61 22 12V10H12V14H17.68L17.58 14.31C16.67 16.47 14.54 18 12.04 18C8.73 18 6.04 15.31 6.04 12C6.04 8.69 8.73 6 12.04 6C13.39 6 14.64 6.45 15.64 7.2L18.43 4.34C16.69 2.88 14.45 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(SocialGoogle);