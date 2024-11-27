function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const ErrorFilled = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_5833_353)"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.8028 2.02439C13.0015 0.658538 10.9985 0.658536 10.1972 2.02439L0.281996 18.9268C-0.519236 20.2927 0.482301 22 2.08476 22H21.9152C23.5177 22 24.5192 20.2927 23.718 18.9268L13.8028 2.02439ZM13 9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9L11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13L13 9ZM12 16.3312C11.4477 16.3312 11 16.7789 11 17.3312C11 17.8835 11.4477 18.3312 12 18.3312H12.0117C12.564 18.3312 13.0117 17.8835 13.0117 17.3312C13.0117 16.7789 12.564 16.3312 12.0117 16.3312H12Z",
  fill: "currentColor"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_5833_353"
}, /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  fill: "white",
  transform: "translate(24 24) rotate(-180)"
}))));
const ForwardRef = /*#__PURE__*/forwardRef(ErrorFilled);
export default ForwardRef;