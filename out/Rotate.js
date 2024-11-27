function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Rotate = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 5C7.58172 5 4 8.58172 4 13C4 14.2552 4.28906 15.4428 4.80423 16.5M18 18.2916C18.382 17.8589 18.7179 17.3844 19 16.876C19.5611 15.8649 19.9094 14.7194 19.9846 13.5M18.6153 8.5C18.9336 8.96694 19.2037 9.46932 19.4185 10M7 19.2454C8.3696 20.3433 10.1081 21 12 21C12.7747 21 13.5236 20.8899 14.232 20.6845C14.4938 20.6086 14.75 20.5197 15 20.4185M10.9797 2L14.3114 5.33172L10.9797 8.66345",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Rotate);