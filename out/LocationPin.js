function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const LocationPin = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.1875 16.3045C18.8503 14.3727 20 12.4018 20 10.2C20 6.22355 16.6421 3 12.5 3C8.35786 3 5 6.22355 5 10.2C5 14.1765 8.75 17.4 12.5 21C13.2931 20.2386 14.0861 19.4941 14.8438 18.7558M11.0937 13.0274C9.74847 12.2436 9.28758 10.5076 10.0642 9.15C10.8409 7.79239 12.561 7.32724 13.9062 8.11106C15.2514 8.89488 15.7123 10.6308 14.9356 11.9885C14.7192 12.3668 14.4295 12.6758 14.0951 12.9078",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(LocationPin);