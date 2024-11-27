function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const SocialIssuu = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 7.66891C10.2354 7.24348 11.0892 7 12 7C14.7614 7 17 9.23857 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 11.2883 7.14867 10.6114 7.41667 9.99858M12 21C16.9705 21 21 16.9705 21 12C21 7.02944 16.9705 3 12 3C9.62852 3 3 3 3 3C3 3 3.00001 9.40092 3.00001 12C3.00001 15.816 5.3749 19.0773 8.72727 20.3864",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(SocialIssuu);