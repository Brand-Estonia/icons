function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Sun = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 12C17 14.7614 14.7614 17 12 17C9.23855 17 6.99998 14.7614 6.99998 12C6.99998 9.23858 9.23855 7 12 7C13.64 7 15.0956 7.78962 16.0074 9.00942M12 4V2M12 22V20M18.9282 8L20.6602 7M3.33972 17L5.07177 16M18.9282 16L20.6602 17M3.33972 7L5.07177 8",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Sun);