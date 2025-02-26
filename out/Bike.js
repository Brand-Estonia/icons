function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Bike = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.67 15.41C9.88 15.9 10 16.44 10 17C10 19.21 8.21 21 6 21C3.79 21 2 19.21 2 17C2 14.79 3.79 13 6 13C6.5 13 6.98 13.09 7.43 13.26M12 14V11L17 10L14 6L11 8M18 17H13M6 10H9L6 17M14.86 14.52C15.59 13.59 16.73 13 18 13C20.21 13 22 14.79 22 17C22 19.21 20.21 21 18 21C15.79 21 14 19.21 14 17M12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Bike);