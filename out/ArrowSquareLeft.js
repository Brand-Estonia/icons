function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const ArrowSquareLeft = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 16.6667C22 18.5335 22 19.4669 21.6367 20.18C21.3171 20.8072 20.8072 21.3171 20.18 21.6367C19.4669 22 18.5335 22 16.6667 22H7.33333C5.46649 22 4.53307 22 3.82003 21.6367C3.19282 21.3171 2.68289 20.8072 2.36331 20.18C2 19.4669 2 18.5335 2 16.6667V7.33333C2 5.46649 2 4.53307 2.36331 3.82003C2.68289 3.19282 3.19282 2.68289 3.82003 2.36331C4.53307 2 5.46649 2 7.33333 2H16.6667C18.5335 2 19.4669 2 20.18 2.36331C20.8072 2.68289 21.3171 3.19282 21.6367 3.82003C22 4.53307 22 5.46649 22 7.33333V12M12 8L8 12M8 12L12 16M8 12H16",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(ArrowSquareLeft);