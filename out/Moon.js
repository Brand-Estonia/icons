function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = require('react');
const {
  forwardRef
} = require('react');
const Moon = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.8935 20.723C15.4469 21.5363 13.7776 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001C2 6.79961 5.96975 2.52631 11.0443 2.04517C8.62867 3.42199 7 6.02096 7 9.00033C7 13.4186 10.5817 17.0003 15 17.0003C17.9791 17.0003 20.5779 15.3719 21.9548 12.9566C21.7763 14.8385 21.0761 16.5684 20.0006 18.0002",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
module.exports = forwardRef(Moon);