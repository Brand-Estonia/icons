function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const CloudCheck = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.05 19C20.7838 19 23 16.8414 23 14.1786C23 11.6676 21.0293 9.60496 18.5123 9.3779C17.9974 6.32728 15.2777 4 12 4C8.72227 4 6.0026 6.32728 5.48772 9.3779C2.97066 9.60496 1 11.6676 1 14.1786C1 16.8414 3.21619 19 5.95 19C8.55103 19 10.7039 19 13.1 19H13.65M9.5 13L11.5 15L15 11.5",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(CloudCheck);