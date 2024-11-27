function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { forwardRef } from "react";
const Heart = (props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.7269 18.347C17.5399 15.9281 22.6481 12.5506 20.4765 8.2144C18.8563 4.95947 14.3669 3.85592 12.0041 6.75414C9.39368 3.5438 4.43171 5.02635 3.22779 8.88322C1.64131 13.9662 8.75234 18.1018 11.8578 21",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = /*#__PURE__*/forwardRef(Heart);
export default ForwardRef;