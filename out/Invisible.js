function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Invisible = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.7226 5.09232C11.1355 5.03223 11.5614 5 12 5C17.1858 5 20.5887 9.50484 21.7319 11.2868C21.8703 11.5025 21.9395 11.6103 21.9782 11.7767C22.0073 11.9016 22.0073 12.0987 21.9782 12.2236C21.9394 12.3899 21.8697 12.4985 21.7304 12.7156C21.4258 13.1901 20.9614 13.8571 20.3461 14.5805M6.64038 6.71504C4.44409 8.1817 2.95305 10.2194 2.26905 11.2853C2.13006 11.5019 2.06057 11.6102 2.02183 11.7765C1.99273 11.9014 1.99272 12.0984 2.0218 12.2234C2.06052 12.3897 2.1297 12.4975 2.26806 12.7132C3.41128 14.4952 6.81418 19 12 19C14.091 19 15.8921 18.2676 17.3721 17.2766M2.85753 3L21.1425 21M9.8451 9.87868C9.29361 10.4216 8.95251 11.1716 8.95251 12C8.95251 13.6569 10.3169 15 12 15C12.8415 15 13.6034 14.6642 14.1549 14.1213",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Invisible);