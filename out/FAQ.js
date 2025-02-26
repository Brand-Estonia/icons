function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const FAQ = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_3983_622)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8.799 8.7C9.05761 7.96483 9.56807 7.34492 10.24 6.95005C10.9118 6.55518 11.7018 6.41083 12.4699 6.54258C13.238 6.67433 13.9347 7.07368 14.4366 7.66988C14.9385 8.26609 15.2132 9.02067 15.212 9.8C15.212 12 11.912 13.1 11.912 13.1M12 17.5H12.011M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_3983_622"
}, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: "white"
}))));
module.exports = forwardRef(FAQ);