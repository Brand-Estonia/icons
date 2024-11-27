function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Notification = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 17C20.5 17 19.8074 17 18.6112 17H5.38887C4.19261 17 3.59448 17 3.46179 16.9016C3.31488 16.7926 3.27626 16.7231 3.26134 16.5408C3.24788 16.3761 3.61515 15.7859 4.34968 14.6054C5.22049 13.206 6.00002 11.0902 6.00002 8C6.00002 6.4087 6.63216 4.88258 7.75738 3.75736C8.8826 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2427 3.75736C17.3679 4.88258 18 6.4087 18 8C18 10.3659 18.457 12.1606 19.0619 13.5M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Notification);