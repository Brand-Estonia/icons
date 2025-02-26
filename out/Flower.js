function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Flower = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.7702 14.4034C15.1386 13.4355 17.2014 14.4832 18.5799 15.7805C19.9585 17.0876 19.8666 18.7042 17.9672 20.0513C16.0679 21.3984 14.628 21.4483 13.6171 19.3029M10.1655 14.4034C11.5339 15.3713 11.1561 17.6165 10.3085 19.3029C9.46094 20.9893 7.85771 21.3984 5.95835 20.0513C4.05898 18.7042 3.56882 17.387 5.34565 15.7805M9.05247 11.0506C8.53168 12.6272 6.23406 12.9565 4.32449 12.6971C2.41491 12.4376 1.5265 11.0706 2.25152 8.89522C2.97655 6.71988 4.11004 5.85174 6.22385 7.00926M19.6011 12.6971C22.0008 12.4276 22.3991 11.0706 21.674 8.89521C20.949 6.71988 19.3969 6.13114 17.7017 7.00926C16.0066 7.88738 14.3523 9.53384 14.8731 11.0506C14.965 11.33 15.0263 11.6693 15.0263 11.9786C15.0263 13.6351 13.6579 14.9722 11.9628 14.9722C10.2677 14.9722 8.8993 13.6351 8.8993 11.9786C8.8993 10.5616 9.90004 9.37419 11.2582 9.06485C11.2582 9.06485 11.6258 9.00498 11.9628 8.98502C11.7381 8.98502 11.2786 8.89521 10.9825 8.73556C9.85919 8.13684 9.15459 6.56022 8.8993 5.10335C8.56231 3.2573 9.62432 2 11.9628 2C14.3013 2 15.5062 2.78831 15.0263 5.10335",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Flower);