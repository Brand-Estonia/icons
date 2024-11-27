function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonPoor = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_6769_100)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 17C8.86287 15.794 10.3323 15 12 15C13.6677 15 15.1371 15.794 16 17M18 21.2211C16.2744 22.3462 14.2136 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.2136 22.3462 16.2744 21.2211 18M8 10V8M16 10V8",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_6769_100"
}, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: "white"
}))));
module.exports = forwardRef(EmoticonPoor);