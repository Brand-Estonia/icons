function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const SocialLinkedin = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.1989 17.6898V10.2476C6.1989 9.33614 5.44786 8.60354 4.51478 8.60354H3.68409C2.751 8.60354 2 9.34173 2 10.2476V20.9944H6.20456M13.7431 17.6897V15.7104C13.7431 11.8523 18.8125 11.5392 18.8125 15.7104V19.3393C18.8125 20.2563 19.5635 21 20.4909 21H21.3216C22.249 21 23 20.2619 23 19.3449V13.457C23 6.9485 15.5012 7.18335 13.7374 10.3873V10.2587C13.7374 9.34728 12.9921 8.60909 12.0647 8.60909H11.2397C10.3123 8.60909 9.56696 9.34728 9.56696 10.2587V21H13.7431M4.09312 6.0929C2.94383 6.0929 2.01072 5.17594 2.01072 4.04645C2.01072 2.91696 2.94383 2 4.09312 2C5.24241 2 6.17548 2.91696 6.17548 4.04645",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(SocialLinkedin);