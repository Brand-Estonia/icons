function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Accessibility = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10 4C10 2.89543 10.8955 2 12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8955 6 10 5.10457 10 4ZM3.0443 6.70574C3.20681 6.1779 3.76645 5.88176 4.29429 6.04428C6.52518 6.73116 7.69247 6.92318 10.0252 6.98683C10.7369 7.00319 11.2782 7.00683 11.9905 7.00005C12.7073 6.99322 13.2413 6.97983 13.9572 6.95074C16.1155 6.85353 17.6511 6.61035 19.7342 6.03597C20.2666 5.88917 20.8172 6.20177 20.964 6.73419C21.1108 7.26661 20.7982 7.81722 20.2658 7.96403C18.3563 8.49054 16.8462 8.76163 15 8.89377V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V16H11V21C11 21.5523 10.5523 22 10 22C9.44774 22 9.00002 21.5523 9.00002 21V8.94848C7.06902 8.84728 5.78143 8.59481 3.70576 7.95572C3.17793 7.79321 2.88178 7.23357 3.0443 6.70574Z",
  fill: "currentColor"
}));
module.exports = forwardRef(Accessibility);