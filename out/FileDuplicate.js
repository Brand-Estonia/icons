function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const FileDuplicate = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 17V4.75875C4 3.7875 4.83077 3 5.85538 3H16M8.85 7H19.15C19.6194 7 20 7.38056 20 7.85V20.15C20 20.6194 19.6194 21 19.15 21H8.85C8.38056 21 8 20.6194 8 20.15V7.85C8 7.38056 8.38056 7 8.85 7Z",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(FileDuplicate);