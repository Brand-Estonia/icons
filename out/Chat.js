function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Chat = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.74226 9.97994H15.7403M7.74226 13.9866H12.741M9.67121 20.7251C14.4712 22.0138 19.405 19.1598 20.6912 14.3505C21.9773 9.54132 19.1288 4.59804 14.3288 3.30942C9.52879 2.02079 4.59498 4.87479 3.30882 9.68401C2.54693 12.5329 3.23596 15.4288 4.92209 17.5842L3.74325 22",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Chat);